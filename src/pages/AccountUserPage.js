import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import userImgae from "../images/UserImage.png";
import { FaRegEdit } from "react-icons/fa";
import FavouritePanel from "../components/FavouriteCities";

const AccountUserPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full min-h-full">
      <div className="w-full mt-10 md:flex md:mt-32">
        <div className="flex-1 my-10 flex justify-center items-center md:my-0">
          <img
            className="w-[300px] md:w-[400px] rounded-3xl shadow-2xl"
            src={userImgae}
          ></img>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-evenly border-4 shadow-2xl bg-gray-100 border-gray-400 rounded-3xl w-80 h-80 md:w-96 md:h-96">
            <div className="flex flex-col justify-center items-center">
              <h2 className="px-10 mb-5 text-blue-700 text-2xl">
                Nickname: Maciuś2137
              </h2>
              <FaRegEdit
                className="cursor-pointer transition duration-400 transform hover:rotate-45"
                size={40}
                color="green"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="px-10 mb-5 text-blue-700 text-2xl">
                Email: mateusz039@op.pl
              </h2>
              <FaRegEdit
                className="cursor-pointer transition duration-400 transform hover:rotate-45"
                size={40}
                color="green"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <FavouritePanel />
      </div>
    </div>
  );
};

export default AccountUserPage;
