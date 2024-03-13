import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-96 flex-col md:flex-row flex items-center justify-evenly w-full md:min-h-40 bg-blue-700">
      <div className="flex flex-col text-left">
        <p className="font-semibold text-xl text-center md:text-left text-white ">
          {t("footer.help")}
        </p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
          {t("footer.regulations")}
        </p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
          {t("footer.faq")}
        </p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
          {t("footer.tutorials")}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-xl text-white text-center md:text-left">
          {t("footer.information")}
        </p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
          {t("footer.contact")}
        </p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
          {t("footer.privacyPolicy")}
        </p>
        <p className="text-center md:text-left text-lg text-white flex-1 hover:cursor-pointer">
          {t("footer.aboutUs")}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-center font-semibold text-xl text-white ">
          {t("footer.followUs")}
        </p>

        <div className="flex">
          <a className="w-fit h-fit" href="https://www.facebook.com/">
            <FaFacebookSquare
              color="white"
              size={30}
              className="mx-2 cursor-pointer"
            />
          </a>

          <a className="w-fit h-fit" href="https://www.instagram.com/">
            <FaInstagram
              color="white"
              size={30}
              className="mx-2 cursor-pointer"
            />
          </a>
          <a className="w-fit h-fit" href="https://www.youtube.com/">
            <FaYoutube
              color="white"
              size={30}
              className="mx-2 cursor-pointer"
            />
          </a>
          <a className="w-fit h-fit" href="https://www.tiktok.com/">
            <FaTiktok color="white" size={30} className="mx-2 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
