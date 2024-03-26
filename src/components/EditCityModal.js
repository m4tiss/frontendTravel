import { React, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import axios from "../config/axios";

const EditCityModal = (props) => {
  const { t } = useTranslation();

  const [cities, setCities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [cityId, setCityId] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    population: "",
  });

  useEffect(() => {
    axios.get("/public/getAllCities").then((res) => {
      const uploadedCities = res.data;
      setCities(uploadedCities);
    });
  }, []);

  const handleChoosenCity = (cityId) => {
    setShowForm(true);
    setCityId(cityId);
    axios.get(`/public/getCity/${cityId}`).then((res) => {
      const uploadedCity = res.data;
      setData({
        name: uploadedCity.name,
        description: uploadedCity.description,
        population: uploadedCity.population,
      });
    });
  };

  const handleEdit = () => {
    axios
      .put(`/updateCity/${cityId}`, data)
      .then((res) => {
        setShowForm(false);
        props.onClose();
      })
      .catch((error) => {
        console.error("Error updating city:", error);
      });
  };

  return (
    <div className="bg-white w-8/12 border-2 border-blue-600 rounded-xl flex flex-col items-center">
      {showForm ? (
        <div className="w-full flex flex-col items-center my-10">
          <h2 className="text-center text-2xl md:mt-10 md:mb-5 font-semibold md:text-4xl">
            {t("modals.editCity")} ✎
          </h2>
          <input
            className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl shadow-2xl h-16 w-1/2 md:my-10"
            placeholder={t("modals.name")}
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <textarea
            maxLength={400}
            rows={1}
            className="border-2 p-5 resize-none border-yellow-500 outline-none my-5 text-2xl shadow-2xl h-16 md:h-36 w-1/2 md:my-10"
            placeholder={t("modals.description")}
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <input
            type="number"
            min="0"
            max="37435191"
            className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl h-16 w-1/2 md:my-5"
            placeholder={t("modals.population")}
            onChange={(e) =>
              setData({
                ...data,
                population:
                  e.target.value !== "" ? parseInt(e.target.value) : null,
              })
            }
            value={data.population}
          />
          <div className="flex flex-col md:flex-row  w-full md:justify-evenly items-center">
            <button
              onClick={handleEdit}
              className="bg-yellow-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-yellow-600 shadow-2xl text-white"
            >
              {t("modals.editCity")}
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
          <div className="h-[300px] md:h-[400px] overflow-y-scroll">
          {cities.map((city) => (
            <div
              key={city.cityId}
              className="w-full md:w-96 px-5 h-12 justify-evenly items-center flex bg-gray-200 my-2 text-2xl rounded-full"
            >
              <p>{city.name}</p>
              <button onClick={() => handleChoosenCity(city.cityId)}>
                <FaRegEdit
                  className="cursor-pointer transition duration-400 transform hover:rotate-45"
                  size={30}
                  color="green"
                />
              </button>
            </div>
          ))}
          </div>
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

export default EditCityModal;
