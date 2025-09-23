import React from "react";

const Country = ({ country }) => {
  console.log(country);

  return (
    <>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>Name: {country.name.common}</h1>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area}</p>
    </>
  );
};

export default Country;
