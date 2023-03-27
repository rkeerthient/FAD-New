import cx from "classnames";
import { useState } from "react";
import { Matcher, SelectableStaticFilter } from "@yext/search-headless-react";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import { FaLocationArrow, FaSpinner } from "react-icons/fa";

const Geolocation = (props: {
  className?: string;
  searchOnGeolocate: boolean;
}): JSX.Element => {
  const searchActions = useSearchActions();
  const staticFilters = useSearchState((state) => state.filters.static);
  const [loading, setLoading] = useState(false);
  return (
    <button
      className={cx(
        props.className,
        "group flex flex-row text-primary items-center gap-x-2"
      )}
      onClick={() => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition((position) => {
          setLoading(false);
          const { latitude, longitude } = position.coords;
          // Make the new filter
          const newLocationFilter: SelectableStaticFilter = {
            displayName: "My Location",
            selected: true,
            filter: {
              kind: "fieldValue",
              fieldId: "builtin.location",
              matcher: Matcher.Near,
              value: {
                lat: latitude,
                lng: longitude,
                radius: 10000,
              },
            },
          };
          // Find the nonlocation filters first, so you can add them back
          // (This is the annoying part)
          const nonLocationFilters =
            staticFilters?.filter((filter) => {
              return !(
                filter.filter.kind === "fieldValue" &&
                (filter.filter.fieldId === "builtin.location" ||
                  filter.filter.fieldId === "builtin.region")
              );
            }) ?? [];
          searchActions.setStaticFilters([
            ...nonLocationFilters,
            newLocationFilter,
          ]);
          props.searchOnGeolocate && searchActions.executeVerticalQuery();
        });
      }}
    >
      <span
        className="group-hover:underline font-semibold tracking-wider text-sm"
        style={{ color: "#60a2f7" }}
      >
        Use My Location
      </span>
      {loading ? (
        <FaSpinner
          className="text-sm animate-spin"
          style={{ color: "#60a2f7" }}
        />
      ) : (
        <FaLocationArrow className="text-sm" style={{ color: "#60a2f7" }} />
      )}
    </button>
  );
};

export default Geolocation;
