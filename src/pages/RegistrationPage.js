import React from "react";
import {Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Registration = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className="w-full h-full flex justify-evenly">
      <div className="hidden lg:flex justify-center">
        <img src={`${process.env.REACT_APP_IMAGES_URL}LoginImage.jpg`} className="h-[750px] mt-5"/>
      </div>
      <div className="w-80 flex flex-col mt-32 md:w-96">
        <h2 className="text-blue-500 text-4xl font-semibold my-10 text-center">
          {t('register.registartion')}
        </h2>
        <input
          placeholder="Email"
          className="border-blue-500 border-solid border-l-8 p-2 text-3xl my-2 outline-none bg-slate-200"
        ></input>
        <input
          placeholder="Password"
          className="border-blue-500 border-solid border-l-8 p-2 text-3xl my-2 outline-none bg-slate-200"
        ></input>

          <Link to='/Login' > 
          <p className="text-blue-500 font-semibold hover:underline hover:cursor-pointer text-end ">{t('register.accountExist')}</p>
          </Link>
        
        <div className="flex justify-center items-center m-6">
          <button class="text-xl bg-blue-400 w-96 h-10 font-semibold text-white border-2 border-blue-500 rounded-xl mx-2 hover:bg-slate-300">
          {t('register.register')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
