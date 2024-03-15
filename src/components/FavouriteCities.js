import React from "react";
import { useTranslation } from "react-i18next";
import CityPanel from "../components/CityPanel";

const FavouritePanel = () => {

    const { t, i18n } = useTranslation();


  return (
    <div className="w-full mb-10">
      <h2 className="text-center text-black text-2xl my-10 font-bold">
        {t("favouritesCities")}⭐
      </h2>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {/* <CityPanel name="Warszawa" /> */}
        {/* <CityPanel name="Warszawa" /> */}
        {/* <CityPanel name="Warszawa" /> */}
        {/* <CityPanel name="Warszawa" /> */}
      </div>
    </div>
  );
};

export default FavouritePanel;
