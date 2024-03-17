import React, { useEffect, useState } from "react";
import CityPanel from "../components/CityPanel";
import { useTranslation } from "react-i18next";
import axios from "../config/axios";


const AllCitiesPanel = () => {
  const { t, i18n } = useTranslation();
  const [continents, setContinents] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("1");

  useEffect(() => {
    axios.get("/getAllContinents").then((res) => {
      const uploadedContinents = res.data;
      setContinents(uploadedContinents);
    });
  }, []);

  useEffect(() => {
    axios.get("/getAllCountries").then((res) => {
      const uploadedCountries = res.data;
      setCountries(uploadedCountries);
    });
  }, []);

  useEffect(() => {
    axios.get("/getAllCities").then((res) => {
      const uploadedCities = res.data;
      setCities(uploadedCities);
      setFilteredCities(uploadedCities);
    })
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    if (value.trim() === "") {
      setFilteredCities(cities);
      setSearchQuery("");
    } else {
      const filtered = cities.filter((city) =>
          city.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
      setSearchQuery(value);
    }
  };

  const handleSort = () => {
    let sortedCities = [...cities];
    if (sortOption === "1") {
      sortedCities.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === "2") {
      sortedCities.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "3") {
      sortedCities.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "4") {
      sortedCities.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilteredCities(sortedCities);
    setSearchQuery("");
  };

  

  return (
    <div className="w-full  min-h-full md:flex">
      <div className="w-full bg-yellow-300 flex flex-col items-center md:w-72">
        <div className="my-10">
          <input
            className=" w-64 mx-5 h-20 text-xl px-8 outline-none rounded-full text-black shadow-xl border border-gray-300"
            placeholder={t("allCities.search") + "  🔍"}
            onChange={handleSearch}
          />
        </div>
        <h2 className="font-semibold text-2xl">{t("allCities.filter")}</h2>
        <div className="my-5 w-56">
          {continents.map((continent) => (
            <label
              key={continent.continentId}
              className="text-lg flex justify-start items-center gap-3"
            >
              <input
                className="h-4 w-4"
                type="checkbox"
                value={continent.name}
              />
              {continent.name}
            </label>
          ))}
        </div>
        <div className="my-5 w-56">
          <h2 className="font-semibold text-2xl my-3 ">
            {t("allCities.country")}
          </h2>
          <select className="block w-full bg-white border border-gray-300 p-3 rounded-full shadow-sm focus:outline-none focus:border-blue-500">
          {countries.map((country) => (
             <option key={country.countryId} value={country.countryId}>{country.name}</option>
          ))}
          </select>
        </div>

        <div className="my-5 w-56">
          <h2 className="font-semibold text-2xl my-3 ">
            {t("allCities.sort")}
          </h2>
          <select 
           className="block w-full bg-white border border-gray-300 p-3 rounded-full shadow-sm focus:outline-none focus:border-blue-500"
           onChange={(event) => setSortOption(event.target.value)}
           >
            <option value="1">Ocena rosnąco</option>
            <option value="2">Ocena malejąco</option>
            <option value="3">A-Z</option>
            <option value="4">Z-A</option>
          </select>
        </div>
        <div className="my-5 w-56">
          <button onClick={handleSort} className="bg-blue-700 text-white w-full h-16 text-3xl rounded-full">
            {t("allCities.sort")}
          </button>
        </div>
      </div>
      <div className="flex-grow flex justify-center my-10">
        <div className="w-10/12 flex flex-col items-center">
          <h2 className="text-black text-center font-semibold text-xl ">
            {t("allCities.upText")}
          </h2>
          <div className="min-h-96 flex gap-10  flex-wrap justify-center items-start my-20">
          {filteredCities.map((city) => (
            <CityPanel key={city.cityId} name={city.name} cityImage={city.cityImage} flagImage={city.country.flagImage} cityId={city.cityId}/>
          ))}
          </div>
          <div>1/20 {t("allCities.page")}</div>
        </div>
      </div>
    </div>
  );
};

export default AllCitiesPanel;
