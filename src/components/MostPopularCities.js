import {React, useState,useEffect} from "react";
import CityPanel from './CityPanel';
import { useTranslation } from "react-i18next";
import axios from "../config/axios";



  
 
const MostPopularCities = () => {

  const { t, i18n } = useTranslation();

  const [mostPopular, setMostPopular] = useState([]);

  useEffect(() => {
    axios.get("/getAllCities").then((res) => {
      const uploadedCities = res.data;
      console.log(uploadedCities)
      setMostPopular(uploadedCities);
    });
  }, []);


  return (
    <div className="w-full flex flex-col justify-center items-center py-5">
        <h2 className=" text-black text-2xl my-10 font-bold">{t('mostPopularCities')}✔</h2>
        <div className="flex flex-wrap gap-10 w-10/12 justify-center items-center">
        {mostPopular.map((city) => (
            <CityPanel name={city.name} cityImage={city.cityImage} flagImage={city.country.flagImage} cityId={city.cityId}/>
          ))}

            
        </div>
    </div>
  );
}

export default MostPopularCities;