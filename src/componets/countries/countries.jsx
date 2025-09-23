import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countryPromise }) => {
  const countriesData = use(countryPromise);
  const countries = countriesData.countries;

  return (
    <>
      <h2>Countries: {countries.length} </h2>

      {countries.map((country) => (
        <Country key={country.cca3.cca3} country={country}></Country>
      ))}
    </>
  );
};
export default Countries;
