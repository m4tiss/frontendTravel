import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-h-96 flex-col md:flex-row flex items-center justify-evenly w-full md:min-h-40 bg-blue-700">
      <div className="flex flex-col text-left">
        <p className="font-semibold text-xl text-center md:text-left text-white ">Pomoc</p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
          Regulamin
        </p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
            FAQ
        </p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
            Poradniki
        </p>
    
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-xl text-white text-center md:text-left">Informacje</p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
          Kontakt
        </p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
          Poiltyka prywatności
        </p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
         O nas
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-center font-semibold text-xl text-white ">
          Obserwuj Nas
        </p>

        <div className="flex">
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
