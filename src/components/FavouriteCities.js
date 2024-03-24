import { React, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CityPanel from "../components/CityPanel";
import axios from "../config/axios";

const FavouritePanel = () => {
  const { t } = useTranslation();
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios.get("/getFavouritesByUser").then((res) => {
      const favouritesCities = res.data;
      setFavourites(favouritesCities);
    });
  }, []);

  return (
    <div className="w-full mb-10">
      <h2 className="text-center text-black text-2xl my-10 font-bold">
        {t("favouritesCities")}⭐
      </h2>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {favourites.length > 0 ? (
          favourites.map((favourite) => (
            <CityPanel
              name={favourite.city.name}
              cityImage={favourite.city.cityImage}
              flagImage={favourite.city.country.flagImage}
              cityId={favourite.city.cityId}
            />
          ))
        ) : (
          <p className="text-red-600 text-3xl">{t("noFavourite")}</p>
        )}
      </div>
    </div>
  );
};

export default FavouritePanel;
