import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import RegisterAndLoginButtons from "./RegisterAndLoginButtons";
import UserAndLogout from "./UserAndLogout";
import { useAuth } from '../provider/AuthProvider';
import { setLanguage } from "../translation/i18n";



const NavBar = () => {
  const [nav, setNav] = useState(true);
  const { t, i18n} = useTranslation();
  const { isAuth } = useAuth();
 



  const changeLanguage = (lng) => {
    setLanguage(lng);
  };

  return (
    <div>
      {nav ? (
        <div className="flex items-center justify-center w-full h-28 bg-blue-700">
          <div className="w-11/12 flex justify-around items-center md:w-4/5">
            <div>
              <Link to="/">
                <h2 className="text-white text-3xl font-semibold">TripTrackers</h2>
              </Link>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="w-11 h-11 flex justify-center items-center rounded-md hover:bg-blue-600 cursor-pointer" onClick={() => changeLanguage("pl")}>
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

              <div className="w-11 h-11 flex justify-center items-center rounded-md hover:bg-blue-600 cursor-pointer" onClick={() => changeLanguage("en")}>
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
            <div className="w-40 hidden md:flex justify-center items-center">
              <Link to="/AllCities">
                <h2 className=" text-white text-xl font-semibold hover:cursor-pointer hover:text-yellow-300">
                  {t('navbar.showAll')}
                </h2>
              </Link>
            </div>
            <div className="hidden md:flex">
            {isAuth() ? <UserAndLogout/> : <RegisterAndLoginButtons /> }
            </div>
            <div className="md:hidden" onClick={() => setNav(!nav)}>
              <HiMenu color="white" size={40} />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full fixed top-0 left-0 flex flex-col items-center bg-gradient-to-b from-blue-800 via-blue-500 to-blue-200 text-white">
          <div
            className="w-full  flex items-center justify-end px-8 py-8"
            onClick={() => setNav(!nav)}
          >
            <IoCloseOutline color="white" size={40} />
          </div>
          <div className="flex flex-col">
            <div className="my-10">
              <h2 className="text-white text-3xl font-semibold text-center">
                TripTrackers
              </h2>
            </div>
            <div className="flex justify-center items-center my-10">
              <div className="w-30 h-30 flex justify-center items-center rounded-md hover:bg-blue-600 cursor-pointer" onClick={() => changeLanguage("pl")}>
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

              <div className="w-30 h-30  flex justify-center items-center rounded-md hover:bg-blue-600 cursor-pointer" onClick={() => changeLanguage("en")}>
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

            <div className="flex justify-center items-center my-2">
              <Link to="/AllCities">
                <h2 onClick={() => setNav(!nav)} class="text-white text-xl font-semibold hover:cursor-pointer hover:text-yellow-300">
                {t('navbar.showAll')}
                </h2>
              </Link>
            </div>
            <div className="flex  flex-col items-center justify-center my-10">
            {isAuth ? <UserAndLogout/> : <RegisterAndLoginButtons onClick={() => setNav(!nav)} /> }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
