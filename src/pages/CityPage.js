import React from "react";
import WarszawaImage from "../images/citiesImages/Warszawa.jpg";
import ReactCountryFlag from "react-country-flag";
import OpinionPanel from "../components/OpinionPanel";

const CityPage = (props) => {
  return (
    <div className="w-full min-h-full flex flex-col">
      <div className="w-full flex flex-col gap-5 items-center md:justify-evenly md:flex-row  my-20 ">
        <div
          className="w-[300px] h-[200px] md:w-[450px] md:h-[250px] xl:w-[900px] xl:h-[500px] rounded-xl"
          style={{
            backgroundImage: `url(${WarszawaImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="w-80 bg-slate-200 md:w-96 rounded-lg">
          <h2 className="font-semibold text-3xl text-center mt-10 ">Warszawa</h2>
          <p className="mx-8 mt-8">Kontynent: Europa</p>
          <div className="flex mx-8 mt-8">
            <p>Kraj: Polska</p>
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
          <p className="mx-8 mt-8" >Ilość mieszkańców: 1 600 000</p>
          <div className="mt-20 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-semibold">Ocena</h2>
              <p className="text-3xl font-semibold my-5" >8/10</p>
          </div>
        </div>
      </div>
      <h2 className="text-black text-2xl my-10 font-bold text-center">Opinie użytkowników</h2>
      <div className="flex flex-col w-4/5 items-center mx-auto">
       <OpinionPanel/>
       <OpinionPanel/>
      </div>
    </div>
  );
};

export default CityPage;
