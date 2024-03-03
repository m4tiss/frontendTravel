import React from "react";
import ReactCountryFlag from "react-country-flag";

const NavBar = () => {
  return (
    <div class="flex items-center justify-center w-full h-28 bg-blue-700">
      <div className="w-4/5 flex justify-around">
        <div>
          <h2 class="text-white text-3xl font-semibold">TripTrackers</h2>
        </div>
        <div class="flex justify-center items-center">
          <div class="w-11 h-11 flex justify-center items-center rounded-md hover:bg-blue-600 cursor-pointer">
            <ReactCountryFlag
              countryCode="PL"
              svg
              style={{
                width: "2em",
                height: "2em",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0px 4px",
              }}
              title="PL"
            />
          </div>

          <div class="w-11 h-11 flex justify-center items-center rounded-md hover:bg-blue-600 cursor-pointer">
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{
                width: "2em",
                height: "2em",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0px 4px",
              }}
              title="GB"
            />
          </div>
        </div>
        <div>
          <button class="bg-white w-40 h-10 font-semibold text-blue-400  border-2 border-blue-400 rounded-md mx-2 hover:bg-slate-300">
            Zarejestruj się
          </button>
          <button class="bg-white w-40 h-10 font-semibold text-blue-400 border-2 border-blue-400 rounded-md mx-2 hover:bg-slate-300">
            Zaloguj się
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
