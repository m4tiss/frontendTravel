import React from "react";
import WarszawaImage from "../images/citiesImages/Warszawa.jpg";
import ReactCountryFlag from "react-country-flag";
import OpinionPanel from "../components/OpinionPanel";
import { useTranslation } from "react-i18next";

const CityPage = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full min-h-full flex flex-col">
      <div className="w-full flex flex-col gap-5 items-center md:justify-evenly md:flex-row  my-20 ">
      <div className="relative w-[300px] h-[200px] md:w-[450px] md:h-[250px] xl:w-[900px] xl:h-[500px] rounded-xl shadow-2xl mb-10 md:mb-0 overflow-hidden">
  <img
    className="w-full h-full object-cover rounded-xl"
    src={WarszawaImage}
    alt="Warszawa"
  />
  <div className="overflow-y-auto lg:overflow-y-hidden absolute inset-0 flex justify-center items-center bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 rounded-xl">
    <p className="flex justify-center flex-wrap items-center p-5 h-full text-white opacity-0 hover:opacity-100 duration-700 ease-in-out text-center transform translate-y-20 hover:translate-y-0">
      Warszawa, stolica i największe miasto Polski, pełna historii i
      kultury, to dynamiczne centrum życia społecznego, biznesowego i
      artystycznego. Znana z bogatego dziedzictwa historycznego,
      Warszawa była świadkiem wielu ważnych wydarzeń, od czasów
      średniowiecznych po burzliwe XX wieku, włącznie z powstaniem
      warszawskim. Spacerując ulicami miasta, można podziwiać
      zróżnicowaną architekturę, która odzwierciedla różne epoki i
      style, od gotyku i renesansu po współczesne budynki. Stare Miasto,
      wpisane na Listę Światowego Dziedzictwa UNESCO, zachwyca swoimi
      klimatycznymi uliczkami, malowniczymi kamienicami i Rynkiem
      Starego Miasta.
    </p>
  </div>
</div>


        <div className="w-80 md:w-96 border-4 shadow-2xl bg-gray-100 border-yellow-400 rounded-3xl">
          <h2 className="font-semibold text-3xl text-center mt-10 ">
            Warszawa
          </h2>
          <p className="mx-8 mt-8">{t("cityPage.continent")}: Europa</p>
          <div className="flex mx-8 mt-8">
            <p>{t("cityPage.country")}: Polska</p>
            <ReactCountryFlag
              className="mx-3 -mt-2"
              countryCode="PL"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="PL"
            />
          </div>
          <p className="mx-8 mt-8">{t("cityPage.population")}: 1 600 000</p>
          <div className="mt-20 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold">{t("cityPage.rating")}</h2>
            <p className="text-3xl font-semibold my-5">8/10</p>
          </div>
        </div>
      </div>
      <h2 className="text-black text-2xl my-10 font-bold text-center justify-center items-center">
        {t("cityPage.userReviews")}✎
      </h2>
      <div className="flex flex-col w-4/5 items-center mx-auto">
        <OpinionPanel />
        <OpinionPanel />
      </div>
    </div>
  );
};

export default CityPage;
