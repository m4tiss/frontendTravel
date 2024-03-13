import React from "react";
import CityPanel from './CityPanel';
import { useTranslation } from "react-i18next";



  
 
const MostPopularCities = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className="w-full flex flex-col justify-center items-center py-5">
        <h2 className=" text-black text-2xl my-10 font-bold">{t('mostPopularCities')}</h2>
        <div className="flex flex-wrap gap-10 w-10/12 justify-center items-center">
            <CityPanel name="Warszawa"/>
            <CityPanel name="Warszawa"/>
            <CityPanel name="Warszawa"/>
            <CityPanel name="Warszawa"/>
            
        </div>
        
        
    </div>
  );
}

export default MostPopularCities;