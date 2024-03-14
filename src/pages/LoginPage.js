import React, { useEffect } from "react";
import LoginImage from "../images/LoginImage.jpg"
import { useTranslation } from "react-i18next";
import axios from "axios";

const LoginPage = () => {

  const { t, i18n } = useTranslation();


  const onLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Please provide both email and password');
      return;
    }

    axios.post('/login', { email, password })
      .then(response => {
        console.log('Login successful');
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="w-full h-full flex justify-evenly">
      <div className="hidden lg:flex justify-center">
        <img src={LoginImage} className="h-[750px] mt-5"/>
      </div>
      <div className="w-80 flex flex-col mt-32 md:w-96 ">
        <h2 className="text-blue-500 text-4xl font-semibold my-10 text-center">
          {t('login.login')}
        </h2>
        <input
          id="email"
          placeholder="Email"
          className="border-blue-500 border-solid border-l-8 p-2 text-3xl my-2 outline-none bg-slate-200"
        ></input>
        <input
          id="password"
          placeholder="Password"
          className="border-blue-500 border-solid border-l-8 p-2 text-3xl my-2 outline-none bg-slate-200"
        ></input>
        <div className="flex justify-center items-center m-6">
          <button onClick={onLogin} className="text-xl bg-blue-400 w-96 h-10 font-semibold text-white border-2 border-blue-500 rounded-xl mx-2 hover:bg-slate-300">
          {t('login.logIn')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
