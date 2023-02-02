import {
  useSearchState,
  FieldValueStaticFilter,
  State,
} from "@yext/search-headless-react";

interface SelectableFieldValueStaticFilter {
  filter: FieldValueStaticFilter;
  selected: boolean;
  displayName?: string;
}

export const useFieldValueFilters = (): SelectableFieldValueStaticFilter[] => {
  const staticFilters = useSearchState((s) => s.filters.static) || [];
  const fieldValueStaticFilters = staticFilters.filter((f) => {
    return f.filter.kind === "fieldValue";
  }) as SelectableFieldValueStaticFilter[];
  return fieldValueStaticFilters;
};

export const getFieldValueStaticFilters = (
  state: State
): SelectableFieldValueStaticFilter[] => {
  const staticFilters = state.filters.static || [];
  const fieldValueStaticFilters = staticFilters.filter((f) => {
    return f.filter.kind === "fieldValue";
  }) as SelectableFieldValueStaticFilter[];
  return fieldValueStaticFilters;
};

export const stringifyValue = (value: string | number | boolean): string => {
  return value.toString();
};
