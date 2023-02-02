import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { useSearchActions, DisplayableFacet } from '@yext/search-headless-react';
import cx from "classnames";
import { BsCaretDownFill } from "react-icons/bs";

const Facet: React.FC<DisplayableFacet> = ({ fieldId, options, displayName }) => {
  const searchActions = useSearchActions();
  const selectedOptions = options.filter(option => option.selected);
  const nameOverrides: { [name: string]: string } = {
    "CUIMC Primary Specialty": "Specialty",
    "Insurances Filter": "Insurance",
    "Expertise Filter": "Expertise",
  }
  const overridedName = nameOverrides.hasOwnProperty(displayName) ?
    nameOverrides[displayName] : displayName;
  return (
    <div className='my-auto text-xs overflow-none text-neutral-900'>
      <Popover>
        <Popover.Button
          className={cx(
            (selectedOptions.length > 0) ? 'bg-stone-200' : "bg-white",
            'flex flex-row focus:outline-none hover:bg-neutral-100 hover:border-neutral-500 px-3 py-2 max-w rounded-md border border-neutral-300 shadow-sm font-bold')}
        >
          {selectedOptions.length > 0 ? `${overridedName} (${selectedOptions.length})` : overridedName}
          <BsCaretDownFill className='ml-2 my-auto text-primary' />
        </Popover.Button>
        <Transition
          enter="transition duration-250 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-150 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel className='z-50 focus:outline-none w-96 absolute top-34 px-2 py-3 bg-white border border-stone-200 rounded-md shadow-md max-h-96 overflow-auto flex flex-col gap-y-2'>
            {
              options.map(option => {
                return (
                  <div
                    key={option.displayName}
                    className='py-1 px-2 flex flex-row gap-2'>
                    <input
                      type="checkbox"
                      className='my-auto'
                      checked={option.selected}
                      onClick={() => {
                        searchActions.setFacetOption(fieldId, option, !option.selected);
                        searchActions.executeVerticalQuery();
                      }} />
                    <label className="tracking-widest">
                      <span className="font-bold text-neutral-500">{option.displayName}</span>
                      <span className='text-neutral-400'>{` (${option.count})`}</span>
                    </label>
                  </div>
                )
              })
            }
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default Facet;