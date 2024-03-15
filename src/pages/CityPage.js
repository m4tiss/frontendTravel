import React, { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import WarszawaImage from "../images/citiesImages/LosAngeles.jpg";
import ReactCountryFlag from "react-country-flag";
import OpinionPanel from "../components/OpinionPanel";
import { useTranslation } from "react-i18next";
import axios from "../config/axios";


const CityPage = () => {
  const { t, i18n } = useTranslation();
  let { cityId } = useParams();
  console.log(cityId);
 const [city, setCity] = useState({});

  useEffect(() => {
    axios.get(`/getCity/${cityId}`).then((res) => {
      const uploadedCity = res.data;
      console.log(uploadedCity)
      setCity(uploadedCity);
    });
  }, []);

  const imagePath = city.cityImage ? require(`../images/citiesImages/${city.cityImage}`) : '';
  const continentName = city.country && city.country.continent && city.country.continent.name;
  const countryName = city.country && city.country.name
  const flagImage = city.country && city.country.flagImage
  const formattedPopulation = city.population ? city.population.toLocaleString() : null;
  const formattedRating = city.rating ? `${city.rating.toFixed(1)}` : null;




  console.log(continentName)
  

  return (
    <div className="w-full min-h-full flex flex-col">
      <div className="w-full flex flex-col gap-5 items-center md:justify-evenly md:flex-row  my-20 ">
        <div className="relative w-[300px] h-[200px] md:w-[450px] md:h-[250px] xl:w-[900px] xl:h-[500px] rounded-xl shadow-2xl mb-10 md:mb-0 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-xl"
            src = {imagePath}
            alt="Warszawa"
          />
          <div className="overflow-y-auto lg:overflow-y-hidden absolute inset-0 flex justify-center items-center bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 rounded-xl">
            <p className="flex justify-center flex-wrap items-center p-5 h-full text-white opacity-0 hover:opacity-100 duration-700 ease-in-out text-center transform translate-y-20 hover:translate-y-0">
              {city.description}
            </p>
          </div>
        </div>

        <div className="w-80 md:w-96 border-4 shadow-2xl bg-gray-100 border-yellow-400 rounded-3xl">
          <h2 className="font-semibold text-3xl text-center mt-10 ">
           {city.name}
          </h2>
          <p className="mx-8 mt-8">{t("cityPage.continent")}: {continentName}</p>
          <div className="flex mx-8 mt-8">
            <p>{t("cityPage.country")}: {countryName}</p>
            <ReactCountryFlag
              className="mx-3 -mt-2"
              countryCode={flagImage}
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="PL"
            />
          </div>
          <p className="mx-8 mt-8">{t("cityPage.population")}: {formattedPopulation}</p>
          <div className="mt-20 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold">{t("cityPage.rating")}</h2>
            <p className="text-3xl font-semibold my-5">{formattedRating}/10</p>
          </div>
        </div>
      </div>

      <h2 className="text-black text-2xl my-10 font-bold text-center justify-center items-center">
        {t("cityPage.userReviews")}✎
      </h2>
      <div className="w-full flex justify-evenly items-center mb-10">
      <button className="bg-blue-500 w-40 h-20 rounded-full shadow-2xl hover:bg-blue-700 text-white">
        {t("cityPage.addReview")} ✎
            </button>
            <button className="bg-yellow-500 w-40 h-20 rounded-full hover:bg-yellow-600 shadow-2xl text-white">
          {t("cityPage.addToFavorites")} ⭐
            </button>
      </div>
      <div className="flex flex-col w-4/5 items-center mx-auto">
        <OpinionPanel />
        <OpinionPanel />
      </div>
    </div>
  );
};

export default CityPage;
