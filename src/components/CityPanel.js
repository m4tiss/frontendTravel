import { React } from "react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

const CityPanel = (props) => {
  return (
    <Link className="h-fit" to={`/CityPage/${props.cityId}`}>
      <div
        className="w-80 h-72 border-2 border-yellow-400 rounded-3xl flex py-10 md:w-96 hover:cursor-pointer hover:shadow-xl hover:shadow-gray-500"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}citiesImages/${props.cityImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white text-2xl px-8 font-semibold">{props.name}</h2>
        <ReactCountryFlag
          countryCode={props.flagImage}
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title="PL"
        />
      </div>
    </Link>
  );
};

export default CityPanel;
