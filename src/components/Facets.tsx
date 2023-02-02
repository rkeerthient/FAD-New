import React from "react";
import { useSearchState, useSearchActions } from "@yext/search-headless-react";
import Facet from "./Facet";
import { BsFilterCircleFill } from "react-icons/bs";

export const Facets: React.FC = () => {
  const facets = useSearchState((s) => s.filters.facets);
  const searchActions = useSearchActions();

  if (!facets) {
    return <></>;
  }

  return (
    <div className="ml-4 w-full flex flex-row py-4 items-center border-b border-stone-200">
      <BsFilterCircleFill className="text-3xl mr-4 text-neutral-500" />
      <h3 className="hidden lg:inline uppercase text-sm font-bold text-neutral-700 mr-4">
        filter
      </h3>
      <div className="my-auto flex flex-row flex-wrap gap-x-4 gap-y-2">
        {facets?.map((facet) => {
          return <Facet key={facet.fieldId} {...facet} />;
        })}
        {facets && (
          <button
            onClick={() => {
              searchActions.resetFacets();
              searchActions.executeVerticalQuery();
            }}
            className="mr-auto my-auto ml-4 text-sm text-blue-500 tracking-wider font-sans"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default Facets;
