import { React, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import axios from "../config/axios";

const EditCountryModal = (props) => {
  const { t } = useTranslation();

  const [countries, setCountires] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [countryId, setCountryId] = useState(null);
  const [data, setData] = useState({
    name: "",
    flagImage: "",
    description: "",
  });

  useEffect(() => {
    axios.get("/public/getAllCountries").then((res) => {
      const uploadedCountries = res.data;
      setCountires(uploadedCountries);
    });
  }, []);

  const handleChoosenCountry = (countryId) => {
    setShowForm(true);
    setCountryId(countryId);
    axios.get(`/public/getCountry/${countryId}`).then((res) => {
      const uploadedCountry = res.data;
      setData({
        name: uploadedCountry.name,
        flagImage: uploadedCountry.flagImage,
        description: uploadedCountry.description,
      });
    });
  };

  const handleEdit = () => {
    axios
      .put(`/updateCountry/${countryId}`, data)
      .then((res) => {
        setShowForm(false);
        props.onClose();
      })
      .catch((error) => {
        console.error("Error updating country:", error);
      });
  };

  return (
    <div className="bg-white w-8/12 border-2 border-blue-600 rounded-xl flex flex-col items-center">
      {showForm ? (
        <div className="w-full flex flex-col items-center my-10">
          <h2 className="text-center text-2xl md:mt-10 md:mb-5 font-semibold md:text-4xl">
            {t("modals.editCountry")} ✎
          </h2>
          <input
            className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl shadow-2xl h-16 w-1/2 md:my-10"
            placeholder={t("modals.name")}
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl shadow-2xl h-16 w-1/2 md:my-10"
            placeholder={t("modals.flag")}
            value={data.flagImage}
            onChange={(e) => setData({ ...data, flagImage: e.target.value })}
          />
          <textarea
            maxLength={400}
            rows={1}
            className="border-2 p-5 resize-none border-yellow-500 outline-none my-5 text-2xl shadow-2xl h-16 md:h-36 w-1/2 md:my-10"
            placeholder={t("modals.description")}
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <div className="flex flex-col md:flex-row  w-full md:justify-evenly items-center">
            <button
              onClick={handleEdit}
              className="bg-blue-400 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-blue-600 shadow-2xl text-white"
            >
              {t("modals.editCountry")}
            </button>
            <button
              onClick={props.onClose}
              className="bg-red-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-red-600 shadow-2xl text-white"
            >
              {t("modals.cancel")}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center my-5">
          <h2 className="text-3xl my-4">{t("modals.listOfCities")}</h2>
          {countries.map((country) => (
            <div
              key={country.countryId}
              className="w-96 h-12 justify-evenly items-center flex bg-gray-200 my-2 text-2xl rounded-full"
            >
              <p>{country.name}</p>
              <button onClick={() => handleChoosenCountry(country.countryId)}>
                <FaRegEdit
                  className="cursor-pointer transition duration-400 transform hover:rotate-45"
                  size={30}
                  color="green"
                />
              </button>
            </div>
          ))}
          <button
            onClick={props.onClose}
            className="bg-red-500 my-5 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-red-600 shadow-2xl text-white"
          >
            {t("modals.cancel")}
          </button>
        </div>
      )}
    </div>
  );
};

export default EditCountryModal;
