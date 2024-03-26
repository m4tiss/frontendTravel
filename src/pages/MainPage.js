import React from "react";
import MainImage from "../components/MainImage";
import MostPopularCities from "../components/MostPopularCities";
import RandomCity from "../components/RandomCity";

const MainPage = () => {
  return (
    <div>
      <MainImage />
      <MostPopularCities />
      <RandomCity/>
    </div>
  );
};
export default MainPage;
