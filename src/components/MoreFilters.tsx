import { useEffect } from 'react';
import {
  Matcher,
  useSearchActions,
  SelectableStaticFilter
} from '@yext/search-headless-react';

const moreFilters: SelectableStaticFilter[] = [
  {
    displayName: "Accepting New Patients",
    selected: false,
    filter: {
      fieldId: "acceptingNewPatients",
      kind: "fieldValue",
      matcher: Matcher.Equals,
      value: "true",
    }
  },
  {
    displayName: "Virtual Visits",
    selected: false,
    filter: {
      fieldId: "c_cUIMCVirtualVisits",
      kind: "fieldValue",
      matcher: Matcher.Equals,
      value: "true",
    },
  }
]

export const MoreFilters = () => {

  const searchActions = useSearchActions();

  useEffect(() => {
    searchActions.setStaticFilters(moreFilters);
  }, []);

  const handleFilterClick = (filter: SelectableStaticFilter) => {
    searchActions.setFilterOption({
      filter: filter.filter,
      selected: !filter.selected,
    })
    searchActions.executeVerticalQuery();
  }

  return (
    <div className='flex flex-row gap-x-4'>
      {moreFilters.map(filter => (
        <div
          key={filter.displayName}
          className='flex flex-row gap-x-2'>
          <input type="checkbox" onClick={() => handleFilterClick(filter)} />
          <label className='text-sm tracking-widest font-thin'>{filter.displayName}</label>
        </div>
      ))
      }
    </div>
  )
}