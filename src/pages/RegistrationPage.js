import {React ,useState} from "react";
import {Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import axios from "../config/axios";


const Registration = () => {

  const { t, i18n } = useTranslation();

  const [isUpload, setIsUpload] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState(`${t('modals.noFile')}`);
  const [countries,setCountries] = useState([])
  const [data, setData] = useState({
    countryId: 1,
    name: "",
    cityImage: "",
    description: "",
    population: null
  });


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

    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          placeholder="Nickname"
          className="border-blue-500 border-solid border-l-8 p-2 text-3xl my-2 outline-none bg-slate-200"
        ></input>
        <input
          placeholder="Email"
          className="border-blue-500 border-solid border-l-8 p-2 text-3xl my-2 outline-none bg-slate-200"
        ></input>
        <input
          placeholder="Password"
          className="border-blue-500 border-solid border-l-8 p-2 text-3xl my-2 outline-none bg-slate-200"
        ></input>
        <label
          htmlFor="fileInput"
          class="h-12 mt-5 flex justify-center items-center px-4 py-2 bg-white-500 text-blue-400 border-2 border-blue-400 rounded-md 
          cursor-pointer transition-colors duration-300 hover:text-white hover:bg-blue-400"
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
        <div className="mb-5 text-blue-400">{selectedFileName}</div>

          <Link to='/Login' > 
          <p className="text-blue-500 font-semibold hover:underline hover:cursor-pointer text-end ">{t('register.accountExist')}</p>
          </Link>
        
        <div className="flex justify-center items-center m-6">
          <button className="text-xl bg-blue-400 w-96 h-10 font-semibold text-white border-2 border-blue-500 rounded-xl mx-2 hover:bg-slate-300">
          {t('register.register')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
