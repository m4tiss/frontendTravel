import { React, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";
import axios from "../config/axios";
import { ToastContainer, toast } from 'react-toastify';

const NewReviewModal = (props) => {
  const { t } = useTranslation();
  

  const [isUpload, setIsUpload] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState(`${t('modals.noFile')}`);
  const [data, setData] = useState({
    cityId: props.cityId,
    title: "",
    description: "",
    rating: "",
    opinionImage: ""
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

      if (!data.title || !data.description || !data.rating || !data.opinionImage) {
        toast.error("Wpisz dane");
        return;
      }

      if (data.rating < 0 || data.rating > 5) {
        toast.error("Ocena spoza zakresu");
        return;
      }

      const formData = new FormData();
      formData.append("image", data.opinionImage);
      formData.append("path", 'opinionsImages/');

      const imageResponse = await axios.post("/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("Zdjęcie");

      const opinionData = {
        cityId: data.cityId,
        title: data.title,
        description: data.description,
        rating: data.rating,
        opinionImage: data.opinionImage.name,
      };

      await axios.post("/addOpinion", opinionData, {
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
    <div className=" bg-white w-8/12 border-2 border-blue-600 rounded-xl flex flex-col">
      <div className="flex flex-col items-center my-10">
        <h2 className="text-center text-2xl md:mt-10 md:mb-5 font-semibold md:text-4xl">
          {t('modals.addReview')} ✎
        </h2>
        <input
          className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl shadow-2xl h-16 w-1/2 md:my-10"
          placeholder={t('modals.title')}
          onChange={e=>setData({...data,title: e.target.value})}
        />
        <textarea
          maxLength={400}
          rows={1}
          className="border-2 p-5 resize-none border-yellow-500 outline-none my-5 text-2xl shadow-2xl h-16 md:h-36 w-1/2 md:my-10"
          placeholder={t('modals.description')}
          onChange={e=>setData({...data,description: e.target.value})}
        />
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl shadow-2xl h-16 w-1/2 md:my-10"
          placeholder={t('modals.rating')}
          onChange={e=>setData({...data,rating: e.target.value})}
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
            setData({ ...data, opinionImage: e.target.files[0] });
          }}
        />
        <div className="mb-5">{selectedFileName}</div>
        <div className="flex flex-col md:flex-row  w-full md:justify-evenly items-center">
          <button onClick={handleSubmit} className="bg-yellow-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-yellow-600 shadow-2xl text-white">
            {t('modals.addReview')}
          </button>
          <button
            onClick={props.onClose}
            className="bg-red-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-red-600 shadow-2xl text-white"
          >
           {t('modals.cancel')}
          </button>
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default NewReviewModal;
