import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-evenly w-full min-h-28 bg-blue-700">
      <div>
        <p className="font-semibold text-xl text-white ">Pomoc</p>
      </div>
      <div>
        <p className="font-semibold text-xl text-white ">Informacje</p>
      </div>
      <div className="flex flex-col">
        <p className="text-center font-semibold text-xl text-white flex-1">
          Obserwuj Nas
        </p>

        <div className="flex flex-1">
          <FaFacebookSquare
            color="white"
            size={30}
            className="mx-2 cursor-pointer"
          />
          <FaInstagram
            color="white"
            size={30}
            className="mx-2 cursor-pointer"
          />
          <FaYoutube color="white" size={30} className="mx-2 cursor-pointer" />
          <FaTiktok color="white" size={30} className="mx-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
