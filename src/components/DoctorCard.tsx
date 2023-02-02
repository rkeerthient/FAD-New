import React, { useState } from "react";
import { Result } from "@yext/search-headless-react";
import HealthcareProfessional from "../types/providers";
import {
  BsFillTelephoneOutboundFill,
  BsCheck,
  BsArrowDown,
  BsArrowUp,
} from "react-icons/bs";
import { Transition } from "@headlessui/react";
import StarRating from "./starRating";

interface DoctorCardProps {
  result: Result;
}

const metersToMiles = (meters: number) => {
  const miles = meters / 1609.34;
  return Math.round(miles * 10) / 10;
};

const TitledList = ({ title, items }: { title: string; items: string[] }) => (
  <>
    <h3 className="uppercase text text-xs mb-2 text-neutral-700 font-bold tracking-widest">
      {title}
    </h3>
    <ul className="ml-6 list-disc text-sm marker:text-primary">
      {items.map((item, index) => (
        <li key={index} className="text-neutral-700 font-light tracking-wider">
          {item}
        </li>
      ))}
    </ul>
  </>
);

const PrimarySpecialistTile = ({
  title,
  items,
}: {
  title: string;
  items: any[];
}) => (
  <>
    <h3 className="uppercase text text-xs mb-2 text-neutral-700 font-bold tracking-widest">
      {title}
    </h3>
    <ul className="ml-6 list-disc text-sm marker:text-primary">
      {items.map((item, index) => (
        <li key={index} className="text-neutral-700 font-light tracking-wider">
          {item.name}
        </li>
      ))}
    </ul>
  </>
);

const RenderHours = ({ title, hours }: { title: string; hours: any }) => {
  let todayDay = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ][new Date().getDay()];
  return (
    <>
      <h3 className="uppercase text text-xs mb-2 text-neutral-700 font-bold tracking-widest">
        {title}
      </h3>
      {Object.keys(hours).map((item: string) => {
        return (
          <div
            className={`grid grid-cols-2 gap-3 ${
              todayDay === item && `bg-gray-300`
            }`}
          >
            <div>{item.charAt(0).toUpperCase() + item.slice(1)}</div>
            {hours[item].isClosed ? (
              <div>Closed</div>
            ) : hours[item].openIntervals.length >= 2 ? (
              <div>
                {hours[item].openIntervals.map(
                  (itemInt: any, index: number) =>
                    `${itemInt.start} - ${itemInt.end}${
                      index !== hours[item].openIntervals.length - 1 ? "," : ""
                    }`
                )}
              </div>
            ) : (
              <div>
                {hours[item].openIntervals[0].start} -
                {hours[item].openIntervals[0].end}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

const DoctorCard: React.FC<DoctorCardProps> = ({ result }) => {
  const doctor = result.rawData as unknown as HealthcareProfessional;
  console.log(JSON.stringify(doctor));

  const { address } = doctor;
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border border-neutral-300 rounded-md overflow-hidden">
      <div className="py-6 px-4">
        <div className="w-full bg-neutral-100 h-32 rounded-full flex flex-row ">
          <img
            className="rounded-full w-32 h-32 border-4 border-white shadow-lg aspect-square"
            src={
              doctor.headshot?.url ??
              "https://www.delvinia.com/wp-content/uploads/2020/05/placeholder-headshot.png"
            }
          />
          <div className="ml-4 my-auto">
            <h1 className="text-primary text-lg font-bold tracking-wide">
              {doctor.name}
            </h1>
            <h2 className="text-neutral-800 font-bold text-sm tracking-wider">
              {doctor.c_medicalGroupStatus &&
                doctor.c_medicalGroupStatus + " | "}
              {doctor.c_starRating && (
                <StarRating selectedStars={doctor.c_starRating} />
              )}
            </h2>
            {doctor.acceptingNewPatients && (
              <div className="my-4 flex flex-row">
                <BsCheck className="text-green-800 text-xl my-auto mr-2" />
                <h3 className="text-sm font-bold tracking-wider text-neutral-800">
                  Accepting New Patients
                </h3>
              </div>
            )}
          </div>
          <div className="ml-auto mr-12 my-auto flex flex-col gap-y-1 lg:flex-row lg:gap-x-4">
            {doctor.acceptingNewPatients && (
              <div className="my-auto flex flex-row gap-x-4">
                <BsFillTelephoneOutboundFill className="text-sm my-auto text-primary" />
                <a
                  href={`tel:${doctor.mainPhone}`}
                  className="hover:underline tracking-widest font-bold text-sm"
                >
                  {doctor.mainPhone}
                </a>
              </div>
            )}
            <button className="shadow-sm hover:shadow-lg transition-shadow duration-150 bg-primary hover:bg-blue-900 py-1 lg:py-2 px-4 rounded-md font-medium  text-white border border-primary">
              Book Online
            </button>
            <button className="shadow-sm hover:shadow-lg transition-shadow duration-150 bg-white py-1 lg:py-2 px-4 rounded-md font-medium  text-primary border border-primary">
              View Profile
            </button>
          </div>
        </div>
        <div className="mt-6 lg:ml-36 text-neutral-500 font-light flex flex-row gap-x-48">
          <div>
            <TitledList
              title="Location Information"
              items={[
                address?.line1 ?? "",
                `${address?.city}, ${address?.region}, ${address?.postalCode}`,
              ]}
            />
          </div>
          <div>
            <PrimarySpecialistTile
              title="Primary Specialties"
              items={doctor.c_relatedSpecialty ?? []}
            />
          </div>
          {doctor.hours && (
            <div>
              <RenderHours title="Hours" hours={doctor.hours}></RenderHours>
            </div>
          )}
        </div>
      </div>
      <div className="h-12 w-full bg-neutral-100 flex flex-row px-8 py-1">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-primary font-bold tracking-wider flex flex-row"
        >
          {expanded ? (
            <>
              <span className="my-auto">See Less Details</span>
              <BsArrowUp className="ml-2 my-auto" />
            </>
          ) : (
            <>
              <span className="my-auto">See More Details</span>
              <BsArrowDown className="ml-2 my-auto" />
            </>
          )}
        </button>
        {result.distance && (
          <h3 className="ml-auto my-auto text-sm font-semibold tracking-wider text-neutral-800">
            Distance: {metersToMiles(result.distance)} miles
          </h3>
        )}
      </div>
      <Transition
        show={expanded}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="h-0"
        enterTo="h-full"
        leave="transition ease-in-out duration-75 transform"
        leaveFrom="h-full"
        leaveTo="h-0"
        className="w-full bg-neutral-100 py-4 text-sm"
      >
        <div className="flex flex-row gap-x-14 px-8 pb-4">
          <div className="w-1/3">
            <TitledList
              title="Board Certified Specialties"
              items={doctor.conditionsTreated ?? []}
            />
          </div>
          <div className="w-1/3">
            <TitledList
              title="Insurance Accepted"
              items={doctor.insuranceAccepted ?? []}
            />
          </div>
          <div className="w-1/3">
            <TitledList title="Degrees" items={doctor.degrees ?? []} />
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default DoctorCard;
