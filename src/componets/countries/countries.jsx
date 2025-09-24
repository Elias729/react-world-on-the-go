import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countryPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handelVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const countriesData = use(countryPromise);
  const countries = countriesData.countries;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center mt-5 bg-[#ec0b43] text-white p-3 rounded-lg">
        Countries: {countries.length}
      </h2>
      <div className="bg-[#58355e] text-white p-3 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2 ">
          Total Countries Visited: {visitedCountries.length}
        </h3>
        <ol className="mb-4 ml-4 flex flex-wrap justify-center items-center gap-4">
          {visitedCountries.map((country) => (
            <li key={country.cca3.cca3}>{country.name.common}</li>
          ))}
        </ol>
      </div>

      <div className="countries-container grid-cols-1 grid md:grid-cols-3 gap-4 justify-items-center">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handelVisitedCountry={handelVisitedCountry}
          ></Country>
        ))}
      </div>
    </>
  );
};
export default Countries;
