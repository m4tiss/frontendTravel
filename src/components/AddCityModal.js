import { React, useState,useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";
import axios from "../config/axios";

const AddCityModal = (props) => {
  const { t } = useTranslation();

  const [isUpload, setIsUpload] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState(`${t('modals.noFile')}`);
  const [countries,seCountries] = useState([])
  const [data, setData] = useState({
    countryId: 1,
    name: "",
    cityImage: "",
    description: "",
    population: null
  });


  useEffect(() => {
    axios.get("/getAllCountries").then((res) => {
      const uploadedCountries = res.data;
      seCountries(uploadedCountries);
    });
  }, []);


  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(`${t('modals.selectedFile')}: ${file.name}`);
      setIsUpload(true);
    } else {
      setSelectedFileName(`${t('modals.noFile')}`);
      setIsUpload(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", data.cityImage);
      formData.append("path", 'citiesImages/');

      const imageResponse = await axios.post("/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("Zdjęcie");

      const cityData = {
        countryId: data.countryId,
        name: data.name,
        cityImage: data.cityImage.name,
        description: data.description,
        rating: 0.0,
        population: data.population
      };

      await axios.post("/addCity", cityData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("dane")

      props.onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div class=" bg-white w-8/12 border-2 border-blue-600 rounded-xl flex flex-col">
      <div className="flex flex-col items-center my-10">
        <h2 className="text-center text-2xl md:mt-10 md:mb-5 font-semibold md:text-4xl">
          {t('modals.addCity')} ✎
        </h2>

        <select 
        defaultValue={1}
        className="block w-80 bg-white border border-yellow-500 p-3 rounded-full shadow-sm focus:outline-non"
        onChange={e=>setData({...data,countryId: e.target.value})}>
            {countries.map((country) => (
            <option key={country.countryId}  value={country.countryId}>{country.name}</option>
          ))}
          </select>

        <input
          className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl h-16 w-1/2 md:my-5"
          placeholder={t('modals.name')}
          onChange={e=>setData({...data,name: e.target.value})}
        />

        <textarea
          maxLength={400}
          rows={1}
          className="border-2 p-5 resize-none border-yellow-500 outline-none my-5 text-2xl h-16 md:h-28 w-1/2 md:my-5"
          placeholder={t('modals.description')}
          onChange={e=>setData({...data,description: e.target.value})}
        />

        <input
          type="number"
          min="0"
          max="37435191"
          className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl h-16 w-1/2 md:my-5"
          placeholder={t('modals.population')}
          onChange={e => setData({...data, population: e.target.value !== "" ? parseInt(e.target.value) : null })}
        />
        <label
          htmlFor="fileInput"
          class="h-12 mt-5 flex justify-center items-center px-4 py-2 bg-white-500 text-purple-600 border-2 border-purple-600 rounded-md cursor-pointer transition-colors duration-300 hover:text-white hover:bg-purple-600"
        >
          {t('modals.choosenFile')}
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={(e) => {
            handleFileSelect(e);
            setData({ ...data, cityImage: e.target.files[0] });
          }}
        />
        <div className="mb-5">{selectedFileName}</div>
        <div className="flex flex-col md:flex-row  w-full md:justify-evenly items-center">
          <button 
          onClick={() => handleSubmit()}
          className="bg-yellow-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-yellow-600 shadow-2xl text-white">
            {t('modals.addCity')}
          </button>
          <button
            onClick={props.onClose}
            className="bg-red-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-red-600 shadow-2xl text-white"
          >
           {t('modals.cancel')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCityModal;
