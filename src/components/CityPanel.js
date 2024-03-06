import React from "react";
import ReactCountryFlag from "react-country-flag";
import italySlider from '../images/MainImage.jpg';
 
const CityPanel = (props) => {

  return (
    <div className="w-80 h-72 border-2 border-yellow-400 rounded-3xl flex py-10 md:w-96 hover:cursor-pointer hover:shadow-xl hover:shadow-gray-500" style={{backgroundImage: `url(${italySlider})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-white text-2xl px-8 font-semibold">{props.name}</h2>
        <ReactCountryFlag
                  countryCode="PL"
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title="PL"
                />
    </div>
  );
}

export default CityPanel;