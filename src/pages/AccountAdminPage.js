import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import adminImage from "../images/AdminImage.png";

const AccountAdminPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full flex my-36">
      <div className="w-4/12 flex flex-col items-center">
        <img
          className="w-[300px] h-[300px] shadow-2xl rounded-full"
          src={adminImage}
        ></img>
        <div className="bg-gray-200 shadow-2xl mt-10 w-96 h-32 flex justify-center items-center">
          <h2 className="text-3xl  font-semibold">ADMIN</h2>
        </div>
      </div>
      <div className="w-8/12 flex flex-col">
        <div className="flex">
          <div className="w-96 flex flex-col items-center gap-10">
            <button className="bg-green-500 w-40 h-20 rounded-full shadow-2xl text-white">
              Dodaj kraj
            </button>
            <button className="bg-blue-400 w-40 h-20 rounded-full shadow-2xl text-white">
              Edytuj kraj
            </button>
            <button className="bg-purple-500 w-40 h-20 rounded-full shadow-2xl text-white">
              Dodaj miasto
            </button>
            <button className="bg-yellow-500 w-40 h-20 rounded-full shadow-2xl text-white">
              Edytuj miasto
            </button>
            <button className="bg-red-500 w-40 h-20 rounded-full shadow-2xl text-white">
              Usuń opinie
            </button>
          </div>
          <div className="flex-grow flex flex-col gap-10">
            <div className="bg-gray-200 shadow-2xl w-10/12 h-28 flex justify-center items-center">
              <h2 className="text-3xl font-semibold">
                Liczba użytkowników na poratlu:
              </h2>
              <h2 className="text-3xl mx-2">200 000</h2>
            </div>
            <div className="bg-gray-200 shadow-2xl w-10/12 h-28 flex justify-center items-center">
              <h2 className="text-3xl font-semibold">
                Miasto z najwyższą oceną:
              </h2>
              <h2 className="text-3xl mx-2">Warszawa</h2>
            </div>
            <div className="bg-gray-200 shadow-2xl w-10/12 h-28 flex justify-center items-center">
              <h2 className="text-3xl font-semibold">
                Średnia liczba opini na użytkownika:
              </h2>
              <h2 className="text-3xl mx-2">3.4</h2>
            </div>
            <div className="bg-gray-200 shadow-2xl w-10/12 h-28 flex justify-center items-center">
              <h2 className="text-3xl font-semibold">
                Najaktywniejszy użytkownik:
              </h2>
              <h2 className="text-3xl mx-2">Maciuś2137</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountAdminPage;
