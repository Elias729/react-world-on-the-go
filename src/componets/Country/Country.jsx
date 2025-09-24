import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country);

  const [visited, setVisited] = useState(false);

  const handelVisited = () => {
    setVisited(visited ? false : true);
  };

  return (
    <>
      <div
        className={`country bg-white border border-gray-100 p-4 m-4 rounded-2xl shadow-lg hover:scale-105 duration-300 flex flex-col justify-center items-start ${
          visited && "visited"
        }`}
      >
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h1 className="text-xl font-bold mt-2">Name: {country.name.common}</h1>
        <p className="text-lg font-semibold mt-2">
          Population: {country.population.population}
        </p>
        <p className="text-lg font-semibold mt-2">
          Area: {country.area.area}
          {country.area.area > 300000 ? "Large Country" : "Small Country"}{" "}
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mt-4"
          onClick={handelVisited}
        >
          {visited ? "Visited" : "Not Visited"}
        </button>
      </div>
    </>
  );
};

export default Country;
