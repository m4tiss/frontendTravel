import { React, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "../config/axios";

const AddCountryModal = (props) => {
  const { t } = useTranslation();

  const [continents, setContinents] = useState([]);
  const [data, setData] = useState({
    continentId: 1,
    name: "",
    flagImage: "",
    description: "",
  });

  useEffect(() => {
    axios.get("/public/getAllContinents").then((res) => {
      const uploadedCountinents = res.data;
      setContinents(uploadedCountinents);
    });
  }, []);

  const handleSubmit = async () => {
    try {
      const countryData = {
        continentId: data.continentId,
        name: data.name,
        flagImage: data.flagImage,
        description: data.description,
      };

      await axios.post("/addCountry", countryData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      props.onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" bg-white w-8/12 border-2 border-blue-600 rounded-xl flex flex-col">
      <div className="flex flex-col items-center my-10">
        <h2 className="text-center text-2xl md:mt-10 md:mb-5 font-semibold md:text-4xl">
          {t("modals.addCountry")} ✎
        </h2>
        <select
          defaultValue={1}
          className="block w-80 bg-white border border-yellow-500 p-3 rounded-full shadow-sm focus:outline-non"
          onChange={(e) => setData({ ...data, continentId: e.target.value })}
        >
          {continents.map((continentId) => (
            <option
              key={continentId.continentId}
              value={continentId.continentId}
            >
              {continentId.name}
            </option>
          ))}
        </select>

        <input
          className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl h-16 w-1/2 md:my-5"
          placeholder={t("modals.name")}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl h-16 w-1/2 md:my-5"
          placeholder={t("modals.flag")}
          onChange={(e) => setData({ ...data, flagImage: e.target.value })}
        />

        <textarea
          maxLength={400}
          rows={1}
          className="border-2 p-5 resize-none border-yellow-500 outline-none my-5 text-2xl h-16 md:h-28 w-1/2 md:my-5"
          placeholder={t("modals.description")}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />

        <div className="flex flex-col md:flex-row  w-full md:justify-evenly items-center">
          <button
            onClick={() => handleSubmit()}
            className="bg-purple-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-purple-600 shadow-2xl text-white"
          >
            {t("modals.addCountry")}
          </button>
          <button
            onClick={props.onClose}
            className="bg-red-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-red-600 shadow-2xl text-white"
          >
            {t("modals.cancel")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCountryModal;
