import { React, useState } from "react";
const countries = [
  {
    name: "india",
    value: "IN",
    cities: ["hyderbad","Delhi", "Mumbai"],
  },
  {
    name: "South Africa",
    value: "SA",
    cities: ["cape town", "Johannesburg", "durban"],
  },
  {
    name: "england",
    value: "EN",
    cities: ["Lords", "london"],
  },
];

const Selectlistoption = () => {
  const [country, setCountry] = useState([]);
  return (
    <div>
      <select
        value={country}
        onChange={(e) => {
          setCountry([e.target.value]);
          console.log(e.target.value);
        }}
      >
        {countries.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>

      <select>
        { countries[country] && countries[country].cities.map((item, index) => {
          return <option value={index}>{item}</option>;
        })}
      </select>



    </div>
  );
};

export default Selectlistoption;
