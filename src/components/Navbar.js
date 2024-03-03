import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  const [nav, setNav] = useState(true);

  return (
    <div>
      {nav ? (
        <div class="flex items-center justify-center w-full h-28 bg-blue-700">
          <div class="w-11/12 flex justify-around items-center md:w-4/5">
            <div>
              <h2 class="text-white text-3xl font-semibold">TripTrackers</h2>
            </div>
            <div class="hidden md:flex justify-center items-center">
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
            <div class="hidden md:flex">
              <button class="bg-white w-40 h-10 font-semibold text-blue-400  border-2 border-blue-400 rounded-md mx-2 hover:bg-slate-300">
                Zarejestruj się
              </button>
              <button class="bg-white w-40 h-10 font-semibold text-blue-400 border-2 border-blue-400 rounded-md mx-2 hover:bg-slate-300">
                Zaloguj się
              </button>
            </div>
            <div class="md:hidden" onClick={() => setNav(!nav)}>
              <HiMenu color="white" size={40} />
            </div>
          </div>
        </div>
      ) : (
        <div class="h-screen w-full flex flex-col items-center bg-gradient-to-b from-blue-800 via-blue-500 to-blue-200 text-white">
          <div
            class="w-full flex items-center justify-end px-8 py-8"
            onClick={() => setNav(!nav)}
          >
            <IoCloseOutline color="white" size={40} />
          </div>
          <div class="flex flex-col">
            <div class="my-10">
              <h2 class="text-white text-3xl font-semibold text-center">
                TripTrackers
              </h2>
            </div>
            <div class="flex justify-center items-center my-10">
              <div class="w-30 h-30 flex justify-center items-center rounded-md hover:bg-blue-600 cursor-pointer">
                <ReactCountryFlag
                  countryCode="PL"
                  svg
                  style={{
                    width: "4em",
                    height: "4em",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0px 4px",
                  }}
                  title="PL"
                />
              </div>

              <div class="w-30 h-30  flex justify-center items-center rounded-md hover:bg-blue-600 cursor-pointer">
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{
                    width: "4em",
                    height: "4em",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0px 4px",
                  }}
                  title="GB"
                />
              </div>
            </div>
            <div class="flex  flex-col items-center justify-center my-10">
              <button class="bg-white w-40 h-10 font-semibold text-blue-400  border-2 border-blue-400 rounded-md mx-2 hover:bg-slate-300 my-5">
                Zarejestruj się
              </button>
              <button class="bg-white w-40 h-10 font-semibold text-blue-400 border-2 border-blue-400 rounded-md mx-2 hover:bg-slate-300 my-5">
                Zaloguj się
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
