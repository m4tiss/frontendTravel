import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { useTranslation } from "react-i18next";
 
const MainImage = () => {

  const { t, i18n } = useTranslation();


  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };


  return (
    <div class="hidden lg:flex mt-10 items-center justify-center h-[500px] w-full">
        <div class="flex flex-col items-start justify-end px-20 py-10 bg-cover h-[500px] rounded-md md:w-[1000px] xl:w-[1400px] "
        style={{backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}MainImage.jpg)`}}>  
        <h2 class="text-white text-4xl font-bold" >{t('mainImage.header')}</h2>
        <p class="text-white text-xl py-4 w-96" >{t('mainImage.description')}</p>
         <button onClick={scrollToBottom} className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">{t('mainImage.button')}</button>
      </div>
    </div>
  );
}

export default MainImage;
