import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countryPromise }) => {
  const countriesData = use(countryPromise);
  const countries = countriesData.countries;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center mt-5 bg-[#ec0b43] text-white p-3 rounded-lg">
        Countries: {countries.length}{" "}
      </h2>

      <div className="countries-container grid-cols-1 grid md:grid-cols-3 gap-4 justify-items-center">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </>
  );
};
export default Countries;
