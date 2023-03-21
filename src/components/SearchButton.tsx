import React from "react";
import { useSearchActions } from "@yext/search-headless-react";
import cx from "classnames";
import { useSearchState } from "@yext/search-headless-react";

const SearchButton: React.FC<{ className: string }> = ({ className }) => {
  const searchActions = useSearchActions();
  const filters = useSearchState((state) => state.filters.static);
  const selectedFilters = filters?.filter((filter) => filter.selected) ?? [];
  const disabled = selectedFilters.length === 0;
  return (
    <button
      disabled={disabled}
      onClick={() => {
        searchActions.executeVerticalQuery();
      }}
      className={cx(
        className,
        " disabled:bg-neutral-200 disabled:text-neutral-600 disabled:border-neutral-600 disabled:border mb-2 h-full w-full tracking-wider bg-primary bg-blue-400 hover:bg-blue-500 rounded-md text-white px-12 py-1.5 text-center"
      )}
    >
      Search
    </button>
  );
};

export default SearchButton;
