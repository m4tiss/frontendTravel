import React from "react";
import CityPanel from "../components/CityPanel";
import { useTranslation } from "react-i18next";


const AllCitiesPanel = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className="w-full  min-h-full md:flex">
      <div className="w-full bg-yellow-300 flex flex-col items-center md:w-96">
        <div className="my-10">
          <input
            className=" w-64 h-20 text-xl px-8 outline-none rounded-full text-black shadow-xl border border-gray-300"
            placeholder={t('allCities.search') + "  🔍"}
          />
        </div>
        <h2 className="font-semibold text-2xl">{t('allCities.filter')}</h2>
        <div className="my-5 w-56">
          <h2 className="font-semibold text-2xl my-3">{t('allCities.continent')}</h2>
          <label className="text-lg flex justify-start items-center gap-3">
            <input className="h-4 w-4" type="checkbox" value="Europa" /> Europa
          </label>

          <label className="text-lg flex justify-start items-center gap-3">
            <input
              className="h-4 w-4"
              type="checkbox"
              value="Ameryka Północna"
            />
            Ameryka Północna
          </label>

          <label className="text-lg flex justify-start items-center gap-3">
            <input
              className="h-4 w-4"
              type="checkbox"
              value="Ameryka Południowa"
            />
            Ameryka Południowa
          </label>

          <label className="text-lg flex justify-start items-center gap-3">
            <input className="h-4 w-4" type="checkbox" value="Azja" /> Azja
          </label>

          <label className="text-lg flex justify-start items-center gap-3">
            <input
              className="h-4 w-4"
              type="checkbox"
              value="Ameryka Północna"
            />
            Afryka
          </label>

          <label className="text-lg flex justify-start items-center gap-3">
            <input
              className="h-4 w-4"
              type="checkbox"
              value="Ameryka Południowa"
            />
            Antarktyda
          </label>
          <label className="text-lg flex justify-start items-center gap-3">
            <input
              className="h-4 w-4"
              type="checkbox"
              value="Ameryka Południowa"
            />
            Australia Południowa
          </label>
        </div>
        <div className="my-5 w-56">
          <h2 className="font-semibold text-2xl my-3 ">{t('allCities.country')}</h2>
          <select className="block w-full bg-white border border-gray-300 p-3 rounded-full shadow-sm focus:outline-none focus:border-blue-500">
            <option value="1">Polska</option>
            <option value="2">Niemcy</option>
            <option value="3">Francja</option>
            <option value="4">Włochy</option>
            <option value="5">Hiszpania</option>
          </select>
        </div>

        <div className="my-5 w-56">
          <h2 className="font-semibold text-2xl my-3 ">{t('allCities.sort')}</h2>
          <select className="block w-full bg-white border border-gray-300 p-3 rounded-full shadow-sm focus:outline-none focus:border-blue-500">
            <option value="1">Ocena rosnąco</option>
            <option value="2">Ocena malejąco</option>
            <option value="3">A-Z</option>
            <option value="4">Z-A</option>
            <option value="5">Hiszpania</option>
          </select>
        </div>
        <div className="my-5 w-56">
          <button className="bg-blue-700 text-white w-full h-16 text-3xl rounded-full">
          {t('allCities.sort')}
          </button>
        </div>
      </div>
      <div className="flex-grow flex justify-center my-10">
        <div className="w-10/12 flex flex-col items-center">
          <h2 className="text-black font-semibold text-xl ">
          {t('allCities.upText')}
          </h2>
          <div className="min-h-96 flex gap-10  flex-wrap justify-center items-start my-20">
            <CityPanel name="Warszawa" />
            <CityPanel name="Warszawa" />
            <CityPanel name="Warszawa" />
            <CityPanel name="Warszawa" />
            <CityPanel name="Warszawa" />
          </div>
          <div>1/20 {t('allCities.page')}</div>
        </div>
      </div>
    </div>
  );
};

export default AllCitiesPanel;
