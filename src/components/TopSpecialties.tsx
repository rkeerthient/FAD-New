import { BsArrowRightShort } from "react-icons/bs";
import {
  Matcher,
  SelectableStaticFilter,
  useSearchActions,
  useSearchState,
} from "@yext/search-headless-react";

const specialties: { name: string; specialty: string }[] = [
  { name: "Cardiology", specialty: "Cardiology" },
  { name: "Internal Medicine", specialty: "Internal Medicine" },
  { name: "Obstetrics", specialty: "Obstetrics" },
  { name: "Thoracic Surgery", specialty: "Thoracic Surgery" },
  { name: "Urologist", specialty: "Urologist" },
  { name: "Surgery", specialty: "Surgery" },
  { name: "Colon & Rectal Surgery", specialty: "Colon & Rectal Surgery" },
  { name: "Urology", specialty: "Urology" },
  { name: "Orthopedics", specialty: "Orthopedics" },
  { name: "Vascular Surgery", specialty: "Vascular Surgery" },
  { name: "Neurology", specialty: "Neurology" },
  { name: "Bariatric Medicine", specialty: "Bariatric Medicine" },
  { name: "Oncology", specialty: "Oncology" },
  { name: "Hematology", specialty: "Hematology" },
  { name: "Pediatrician", specialty: "Pediatrician" },
  { name: "Ear, Nose & Throat", specialty: "Ear, Nose & Throat" },

  { name: "Surgical Oncology", specialty: "Surgical Oncology" },
  { name: "Sports Medicine", specialty: "Sports Medicine" },
  { name: "Critical Care Medicine", specialty: "Critical Care Medicine" },
  { name: "Family Practice Physician", specialty: "Family Practice Physician" },
  { name: "Endocrinology", specialty: "Endocrinology" },
  { name: "Nutritionist", specialty: "Nutritionist" },
  { name: "Medical Oncology", specialty: "Medical Oncology" },
  { name: "Surgery Center", specialty: "Surgery Center" },
  { name: "Gastroenterology", specialty: "Gastroenterology" },
  {
    name: "Infectious Disease Medicine",
    specialty: "Infectious Disease Medicine",
  },
  { name: "Rehabilitation Center", specialty: "Rehabilitation Center" },
  { name: "Psychiatry", specialty: "Psychiatry" },
  { name: "Neurosurgery", specialty: "Neurosurgery" },
  { name: "Pulmonology", specialty: "Pulmonology" },
  { name: "Radiation Oncology", specialty: "Radiation Oncology" },
  { name: "Otolaryngology", specialty: "Otolaryngology" },
  { name: "Pediatric Nephrology", specialty: "Pediatric Nephrology" },
  { name: "Interventional Cardiology", specialty: "Interventional Cardiology" },
  { name: "Neurologist", specialty: "Neurologist" },
  { name: "Pediatric Surgery", specialty: "Pediatric Surgery" },
  { name: "Pediatric Urology", specialty: "Pediatric Urology" },
  { name: "Pediatric Oncology", specialty: "Pediatric Oncology" },
  { name: "Pediatric Neurology", specialty: "Pediatric Neurology" },
  { name: "Geriatrician", specialty: "Geriatrician" },
  { name: "Pediatric Hematology", specialty: "Pediatric Hematology" },
  { name: "Pediatric Orthopedics", specialty: "Pediatric Orthopedics" },
  { name: "Women's Health Clinic", specialty: "Women's Health Clinic" },
  { name: "Geriatric Psychiatry", specialty: "Geriatric Psychiatry" },
  { name: "Dermatology", specialty: "Dermatology" },
  { name: "Transplant Surgery", specialty: "Transplant Surgery" },
  { name: "Gynecology", specialty: "Gynecology" },
  { name: "Oral Surgery", specialty: "Oral Surgery" },
  { name: "Allergies & Immunology", specialty: "Allergies & Immunology" },
];

const TopSpecialties = (): JSX.Element => {
  const actions = useSearchActions();
  const currentFilters = useSearchState((state) => state.filters.static) ?? [];
  return (
    <div className="bg-white mt-16 border border-neutral-300 shadow-sm p-6 rounded-md mx-auto w-4/5 lg:w-3/5">
      <h1 className="font-bold text-neutral-700 tracking-wider ">
        Top Specialties
      </h1>
      <ul className="mt-4 grid grid-cols-3 gap-y-4">
        {specialties.map((specialty, index) => (
          <li
            key={index}
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
                    fieldId: "c_relatedSpecialty.name",
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
