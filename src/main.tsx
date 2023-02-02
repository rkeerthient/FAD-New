import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  provideHeadless,
  SearchParameterField,
  FilterSearchResponse,
  Matcher,
  NearFilterValue,
  SelectableStaticFilter,
  SandboxEndpoints,
} from "@yext/search-headless-react";
import { cloneDeep } from "lodash";
import HeadlessProvider from "./components/HeadlessProvider";
import { getFieldValueStaticFilters } from "./utils";

const originalSearcher = provideHeadless({
  apiKey: "7e586e5de90ad8889acbabca5bc57f32",
  experienceKey: "find-a-doctor",
  locale: "en",
  experienceVersion: "STAGING",
  verticalKey: "providers",
  endpoints: SandboxEndpoints,
});

const searcher = cloneDeep(originalSearcher);

interface FieldMapper {
  fieldId: string;
  queryParam: string;
}

const fieldMappers: FieldMapper[] = [
  {
    fieldId: "builtin.medicalSpecialty",
    queryParam: "sp",
  },
  {
    fieldId: "c_relatedSpecialty.name",
    queryParam: "cp",
  } 
];

searcher.executeFilterSearch = async (
  query: string,
  sectioned: boolean,
  fields: SearchParameterField[]
) => {
  const results = await originalSearcher.executeFilterSearch(
    query,
    sectioned,
    fields
  );
  if (!results) {
    return results;
  }
  let sections = results.sections
    .map((section) => {
      if (section.label === "CUIMC Primary Specialty") {
        section.label = "Specialty";
        return section;
      }
      if (!section.label) {
        // Sometimes the label is undefined due to a bug in streams
        // This will mean it's the linked condition field
        section.label = "Conditions";
        return section;
      }
      return section;
    })
    // Specialty should always show up at the top
    .sort((a, b) => {
      if (a.label === "Specialty") {
        return -1;
      } else if (b.label === "Specialty") {
        return 1;
      } else {
        return 0;
      }
    });
  const revisedResults: FilterSearchResponse = {
    queryId: results.queryId,
    sections: sections,
    uuid: results.uuid,
    businessId: results.businessId,
  };
  return revisedResults;
};

ReactDOM.render(
  <React.StrictMode>
    <HeadlessProvider
      routing={{
        updateCadence: "onSearch",
        deserializeParams: (params, actions, getState) => {
          const allFilters: SelectableStaticFilter[] = [];
          // For each field mapper, check if there is a filter for that field
          // If there is, add it to the array of filters
          fieldMappers.forEach((fieldMapper) => {
            const filterValue = params.get(fieldMapper.queryParam);
            if (filterValue) {
              const newStaticFilter: SelectableStaticFilter = {
                displayName: filterValue,
                selected: true,
                filter: {
                  kind: "fieldValue",
                  fieldId: fieldMapper.fieldId,
                  matcher: Matcher.Equals,
                  value: filterValue,
                },
              };
              allFilters.push(newStaticFilter);
            }
          });
          // Location filter handling is unique
          const locationName = params.get("q");
          if (locationName) {
            // This determines which field we should apply the filter on -
            // builtin.location or builtin.region
            // (The logic is different depending on the filter type)
            const locationFilterType = params.get("lt") ?? "";
            if (!["reg", "loc"].includes(locationFilterType)) {
              throw new Error("Invalid location filter type");
            }
            const locationFilterField =
              locationFilterType === "reg"
                ? "builtin.region"
                : "builtin.location";
            let locationFilter: SelectableStaticFilter;
            // This means there is a location filter
            // First check for lat/lng/radius. If these are found, it's a near filter
            if (
              params.get("lat") &&
              params.get("lng") &&
              params.get("radius")
            ) {
              const lat = parseFloat(params.get("lat")!);
              const lng = parseFloat(params.get("lng")!);
              const radius = parseFloat(params.get("radius")!);
              const nearFilter: NearFilterValue = {
                lat,
                lng,
                radius,
              };
              locationFilter = {
                displayName: locationName,
                selected: true,
                filter: {
                  kind: "fieldValue",
                  fieldId: locationFilterField,
                  matcher: Matcher.Near,
                  value: nearFilter,
                },
              };
              allFilters.push(locationFilter);
            } else if (params.get("qp")) {
              locationFilter = {
                displayName: locationName,
                selected: true,
                filter: {
                  kind: "fieldValue",
                  fieldId: locationFilterField,
                  matcher: Matcher.Equals,
                  value: params.get("qp")!,
                },
              };
              allFilters.push(locationFilter);
            }
            actions.setStaticFilters(allFilters);
            if (allFilters.length > 0) {
              actions.executeVerticalQuery();
            }
          }
        },
        serializeState: (state) => {
          const params = new URLSearchParams();
          const fvFilters = getFieldValueStaticFilters(state);
          // For each field mapper, check if there is a filter for that field
          // If there is, add it to the params
          fieldMappers.forEach((fieldMapper) => {
            const filter = fvFilters.find(
              (fvFilter) =>
                fvFilter.selected &&
                fvFilter.filter.fieldId === fieldMapper.fieldId
            );
            if (filter) {
              params.set(
                fieldMapper.queryParam,
                filter.filter.value.toString()
              );
            }
          });

          // Location filter handling is unique
          const locationFilter = state.filters.static?.find((f) => {
            return (
              f.filter.kind === "fieldValue" &&
              f.selected &&
              ["builtin.region", "builtin.location"].includes(f.filter.fieldId)
            );
          });
          const locationName = locationFilter?.displayName;
          locationName && params.append("q", locationName);
          if (locationFilter?.filter.kind !== "fieldValue") {
            throw new Error("Location filter is not a field value filter");
          }
          // lt (locationType) param indicates whether the filter is on region or location
          // (We can't always use builtin.location because it's possible to have a location filter on a region)
          const locationFilterType =
            locationFilter.filter.fieldId === "builtin.location"
              ? "loc"
              : "reg";
          params.append("lt", locationFilterType);
          if (locationFilter.filter.matcher == Matcher.Near) {
            // Why doesn't typescript do this for me automatically?
            const { lat, lng, radius } = locationFilter.filter
              .value as NearFilterValue;
            params.append("lat", lat.toString());
            params.append("lng", lng.toString());
            params.append("radius", radius.toString());
          } else if (locationFilter.filter.matcher == Matcher.Equals) {
            if (typeof locationFilter.filter.value === "string") {
              params.append("qp", locationFilter.filter.value);
            } else {
              throw new Error("Location filter value is not a string");
            }
          }
          return params;
        },
      }}
      searcher={searcher}
    >
      <App />
    </HeadlessProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
