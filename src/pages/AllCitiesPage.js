import { React, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CityPanel from "../components/CityPanel";
import axios from "../config/axios";

const AllCitiesPanel = () => {
  const ITEMS_PER_PAGE = 6;

  const { t } = useTranslation();
  const [continents, setContinents] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContinents, setSelectedContinents] = useState(["Europa"]);

  const [selectedCountry, setSelectedCountry] = useState(["all"]);

  useEffect(() => {
    axios.get("/public/getAllContinents").then((res) => {
      const uploadedContinents = res.data;
      setContinents(uploadedContinents);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`/public/getCountriesByContinent/${selectedContinents}`)
      .then((res) => {
        const uploadedCountries = res.data;
        setCountries(uploadedCountries);
      });
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
    let sortedCities;
    if (selectedCountry != "all") {
      sortedCities = [...filteredCities];
    } else {
      sortedCities = [...cities];
    }

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

  const handleContinent = (continent) => {
    const updatedSelectedContinents = [...selectedContinents];
    if (updatedSelectedContinents.includes(continent)) {
      const index = updatedSelectedContinents.indexOf(continent);
      updatedSelectedContinents.splice(index, 1);
    } else {
      updatedSelectedContinents.push(continent);
    }

    setSelectedContinents(updatedSelectedContinents);
  };

  useEffect(() => {
    setCountries([]);
    const axiosRequests = selectedContinents.map((selectedContinent) => {
      return axios
        .get(`/public/getCountriesByContinent/${selectedContinent}`)
        .then((res) => res.data);
    });

    Promise.all(axiosRequests).then((responses) => {
      const allCountries = responses.flat();
      const nonEmptyCountries = allCountries.filter(
        (country) => country !== "" && country !== undefined
      );
      setCountries(nonEmptyCountries);
    });
  }, [selectedContinents]);

  useEffect(() => {
    setCities([]);
    setFilteredCities([]);
    const uniqueContinents = [...new Set(selectedContinents)];
    const axiosRequests = uniqueContinents.map((selectedContinent) => {
      return axios
        .get(`/public/getCitiesByContinent/${selectedContinent}`)
        .then((res) => res.data);
    });

    Promise.all(axiosRequests).then((responses) => {
      const allCities = responses.flat();
      const nonEmptyCities = allCities.filter(
        (city) => city !== "" && city !== undefined
      );
      setCities(nonEmptyCities);
      setFilteredCities(nonEmptyCities);
    });
  }, [selectedContinents]);

  const handleCountry = (event) => {
    const selectedCountryValue = event.target.value;
    setSelectedCountry(selectedCountryValue);
  };

  useEffect(() => {
    if (selectedCountry === "all") {
      setFilteredCities(cities);
    } else {
      const filtered = cities.filter(
        (city) => city.country.name === selectedCountry
      );
      setFilteredCities(filtered);
    }
  }, [selectedCountry]);

  const renderCities = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredCities
      .slice(startIndex, endIndex)
      .map((city) => (
        <CityPanel
          key={city.cityId}
          name={city.name}
          cityImage={city.cityImage}
          flagImage={city.country ? city.country.flagImage : null}
          cityId={city.cityId}
        />
      ));
  };

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(filteredCities.length / ITEMS_PER_PAGE);
    const paginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`rounded-full mx-1 px-3 py-1 border ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
        >
          {i}
        </button>
      );
    }
    return paginationButtons;
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
          {continents.map((continent, index) => (
            <label
              key={continent.continentId}
              className="text-lg flex justify-start items-center gap-3"
            >
              <input
                className="h-4 w-4"
                type="checkbox"
                value={continent.name}
                defaultChecked={index === 0}
                onChange={() => handleContinent(continent.name)}
              />
              {continent.name}
            </label>
          ))}
        </div>
        <div className="my-5 w-56">
          <h2 className="font-semibold text-2xl my-3 ">
            {t("allCities.country")}
          </h2>
          <select
            className="block w-full bg-white border border-gray-300 p-3 rounded-full shadow-sm focus:outline-none focus:border-blue-500"
            onChange={handleCountry}
          >
            <option key={0} value="all">
              {t("allCities.all")}
            </option>
            {countries.map((country) => (
              <option key={country.countryId} value={country.name}>
                {country.name}
              </option>
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
            <option value="1">{t("allCities.sortAscending")}</option>
            <option value="2">{t("allCities.sortDescending")}</option>
            <option value="3">{t("allCities.sortAZ")}</option>
            <option value="4">{t("allCities.sortZA")}</option>
          </select>
        </div>
        <div className="my-5 w-56">
          <button
            onClick={handleSort}
            className="bg-blue-700 text-white w-full h-16 text-3xl rounded-full"
          >
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
            {renderCities()}
          </div>
          <div>{renderPaginationButtons()}</div>
        </div>
      </div>
    </div>
  );
};

export default AllCitiesPanel;
