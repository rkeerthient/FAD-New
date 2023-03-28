export const NoResults = () => {
  return (
    <div className="text-center text-lg tracking-wider text-gray-800">
      Sorry, there are no doctors that meet your search criteria. Please modify
      your search and try again or select a specialty from the list below. For
      help finding a doctor or scheduling an appointment please call Synergic
      Doctors at{" "}
      <a
        href="tel:1800-888-888"
        className="text-blue-700 cursor-pointer underline"
      >
        1800-888-888
      </a>
      .
    </div>
  );
};
