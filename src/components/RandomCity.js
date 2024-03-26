import { React, useState, useEffect } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import axios from "../config/axios";
import { Link } from "react-router-dom";




const RandomCity = () => {

    const [randomCityId,setRandomCityId] = useState();

    useEffect(() => {
        axios.get("/public/getRandomCityId").then((res) => {
          const randomCityId = res.data;
          setRandomCityId(randomCityId);
        });
      }, []);

  return (
    <Link to={`/CityPage/${randomCityId}`}>
      <div className="fixed top-0 p-1 md:top-1/4 left-0  bg-red-600 md:p-2 cursor-pointer">
        <GiPerspectiveDiceSixFacesRandom size={40} color="white" />
      </div>
    </Link>
  );
};

export default RandomCity;
