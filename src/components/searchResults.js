import React, { useState } from "react";

function CountryList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [countryList, setCountryList] = useState([
    "Argentina",
    "Belgium",
    "Canada",
    "Denmark",
    "Ecuador",
    "France",
    "Germany",
    "Honduras",
    "India",
    "Japan",
  ]);
  //   alert("hi");
  const filteredCountries = countryList.filter((country) =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search for a country..."
      />
      <ul>
        {filteredCountries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
