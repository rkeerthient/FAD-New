import { useState } from "react";
import SearchButton from "./components/SearchButton";
import Facets from "./components/Facets";
import DoctorCard from "./components/DoctorCard";
import TopSpecialties from "./components/TopSpecialties";
import Geolocation from "./components/Geolocation";
import { Transition } from "@headlessui/react";
import {
  FilterSearch,
  FilterSearchCssClasses,
  Pagination,
  ResultsCount,
} from "@yext/search-ui-react";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import { NoResults } from "./components/NoResults";
import { MoreFilters } from "./components/MoreFilters";

function App() {
  const searchActions = useSearchActions();
  const [hasSearched, setHasSearched] = useState(false);
  const results = useSearchState((s) => s.vertical.results);
  const loading = useSearchState((s) => s.searchStatus.isLoading);

  searchActions.addListener({
    valueAccessor: (s) => s.vertical.results,
    callback: () => setHasSearched(true),
  });

  const filterSearchCss: FilterSearchCssClasses = {
    inputElement:
      "tracking-wide text-lg font-thin focus:shadow-md px-3 py-2 hover:shadow-sm transition-shadow",
    filterSearchContainer: "mt-auto relative pb-0",
    sectionLabel: "uppercase tracking-widest px-4 border-t border-gray-300",
    option: "text-neutral-700 tracking-widest font-light px-4 my-auto",
    optionsContainer: "font-thin bg-white",
    label: "tracking-wider text-neutral-700 font-light",
  };

  return (
    <>
      <Transition
        className={"absolute z-30 w-full h-full"}
        show={loading ?? false}
        enter="transition-opacity duration-300 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300 ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-neutral-300/30 absolute w-full h-full"></div>
      </Transition>
      <div className="w-full sticky top-0 flex h-14">
        <a href="/" className="my-auto mx-auto text-white w-3/4 flex">
          <img
            className="h-8"
            src="https://healthcare-support-demo.yextdemos.com.pagescdn.com/logo_synergic.ce4665c2ed861fdda4efab8b8a5fd0a0.png"
          />
          <div className="ml-auto my-auto"></div>
        </a>
      </div>
      <div className="w-full flex flex-col relative">
        <div className="w-full bg-neutral-100 h-56 absolute z-10" />
        <div className="mx-auto flex absolute z-10 w-full">
          <div className="w-11/12 lg:w-3/4 mx-auto flex flex-col">
            <h1 className="mx-auto uppercase mt-14 mb-8 text-4xl text-neutral-700 font-bold tracking-widest">
              Find a Doctor
            </h1>
            <div className="w-full rounded-md shadow-xl bg-white border border-neutral-200">
              <div className="m-4 flex flex-col gap-y-4 lg:flex-row lg:gap-x-6">
                <div className="w-full lg:w-1/2">
                  <div className="text-neutral-800 font-bold text-xs uppercase tracking-wider mb-2 truncate">
                    Search by Specialty, Expertise, or Provider Name
                  </div>
                  <FilterSearch
                    placeholder="Search by specialty, name, or expertise..."
                    label="e.g. Allergy and Immunology"
                    sectioned={true}
                    searchOnSelect={true}
                    customCssClasses={filterSearchCss}
                    searchFields={[
                      {
                        entityType: "healthcareProfessional",
                        fieldApiName: "c_relatedSpecialty.name",
                      },
                      {
                        entityType: "healthcareProfessional",
                        fieldApiName: "builtin.medicalSpecialty",
                      },
                      {
                        entityType: "healthcareProfessional",
                        fieldApiName: "name",
                      },
                    ]}
                  />
                  <MoreFilters />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-neutral-800 font-bold text-xs uppercase tracking-wider mb-2 truncate">
                    Search by Location
                  </div>
                  <FilterSearch
                    label="e.g. New York, NY or 10032"
                    placeholder="Search by location..."
                    customCssClasses={filterSearchCss}
                    searchOnSelect={true}
                    searchFields={[
                      {
                        entityType: "healthcareProfessional",
                        fieldApiName: "builtin.location",
                      },
                    ]}
                  />
                  <Geolocation searchOnGeolocate={true} />
                </div>
                <SearchButton className="mt-auto w-full lg:w-36" />
              </div>
              <div className="px-4 mb-4 flex flex-row gap-x-10 items-center"></div>
              <div className="bg-neutral-100">
                <Facets />
              </div>
            </div>
            {hasSearched ? (
              <div>
                <div className="mt-8 w-full flex flex-row font-light">
                  <ResultsCount
                    customCssClasses={{
                      resultsCountContainer:
                        "my-auto text-neutral-700 font-light",
                    }}
                  />
                  <div className="ml-auto">
                    Need Further Help? <a>Call 877-426-5637</a>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 mt-4">
                  {results &&
                    results.length > 0 &&
                    results.map((result) => (
                      <DoctorCard key={result.id} result={result} />
                    ))}
                </div>
              </div>
            ) : (
              <TopSpecialties />
            )}
            {hasSearched && results && results?.length < 1 && <NoResults />}
            <div className="mt-4">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
