import { BsArrowRightShort } from "react-icons/bs";
import {
  Matcher,
  SelectableStaticFilter,
  useSearchActions,
  useSearchState,
} from "@yext/search-headless-react";

const specialties: { name: string; specialty: string }[] = [
  {
    name: "Cancer",
    specialty: "Oncologist",
  },
  {
    name: "Cardiology",
    specialty: "Cardiovascular Disease",
  },
  {
    name: "Cardiac (Heart) Surgery",
    specialty: "Cardiac Surgery",
  },
  {
    name: "Dermatology",
    specialty: "Dermatology",
  },
  {
    name: "Diabetes & Endocrinology",
    specialty: "Endocrinology",
  },
  {
    name: "Ear, Nose & Throat",
    specialty: "Otolaryngology-Head & Neck Surgery",
  },
  {
    name: "Gastroenterology",
    specialty: "Gastroenterology",
  },
  {
    name: "Nephrology",
    specialty: "Nephrology",
  },
  {
    name: "Neurology",
    specialty: "Neurology",
  },
  {
    name: "Neurosurgery",
    specialty: "Neurolical Surgery",
  },
  {
    name: "Obstetrics & Gynecology (OBGYN)",
    specialty: "Obstetrics and Gynecology",
  },
  {
    name: "Ophthalmology",
    specialty: "Ophthalmology",
  },
  {
    name: "Orthopedic Surgery",
    specialty: "Orthopedic Surgery",
  },
  {
    name: "Pediatrics",
    specialty: "Pediatrics",
  },
  {
    name: "Primary Care",
    specialty: "Primary Care",
  },
  {
    name: "Primary Care Pediatrics",
    specialty: "Pediatrician (General Pediatrics)",
  },
  {
    name: "Psychiatry",
    specialty: "Psychiatry",
  },
  {
    name: "Pulmonary & Lung",
    specialty: "Pulmonology",
  },
  {
    name: "Rheumatology",
    specialty: "Rheumatology",
  },
  {
    name: "Urology",
    specialty: "Urology",
  },
];

const TopSpecialties = (): JSX.Element => {
  const actions = useSearchActions();
  const currentFilters = useSearchState((state) => state.filters.static) ?? [];
  return (
    <div className="bg-white mt-16 border border-neutral-300 shadow-sm p-6 rounded-md mx-auto w-4/5 lg:w-3/5">
      <h1 className="font-bold text-neutral-700 tracking-wider ">
        Top Specialties
      </h1>
      <ul className="mt-4 grid grid-cols-2 gap-y-4">
        {specialties.map((specialty, index) => (
          <li
            key={specialty.name}
            className="text-xs font-semibold tracking-widest text-primary group"
          >
            <button
              className="flex flex-row group-hover:underline"
              onClick={() => {
                const newSpecialtyFilter: SelectableStaticFilter = {
                  displayName: specialty.name,
                  selected: true,
                  filter: {
                    kind: "fieldValue",
                    matcher: Matcher.Equals,
                    fieldId: "builtin.medicalSpecialty",
                    value: specialty.specialty ?? specialty.name,
                  },
                };
                actions.setStaticFilters([
                  ...currentFilters,
                  newSpecialtyFilter,
                ]);
                actions.executeVerticalQuery();
              }}
            >
              {specialty.name}
              <BsArrowRightShort className="my-auto text-lg group-hover:translate-x-2 transition delay-150" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSpecialties;
