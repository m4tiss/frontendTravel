import React from "react";
import ReactCountryFlag from "react-country-flag";
import userImgae from "../images/UserImage.png";
import yellowStarImage from "../images/StarImage.jpg";
import grayStarImage from "../images/GrayStarImage.jpg";
import opinionImage from '../images/opinionImages/Warszawa1.jpg'
import { Link } from "react-router-dom";

const OpinionPanel = () => {
  return (
    <div className="bg-white w-full my-3 m-h-40 border-4 border-yellow-400 rounded-3xl flex flex-col items-center">
      <div className="w-9/12 flex flex-col m-4 items-center justify-between xl:flex-row">
        <div className="flex items-center">
          <img className="w-[60px] h-[60px] rounded-full" src={userImgae}></img>
          <p className="mx-10 font-semibold">Maciuś2137</p>
        </div>
        <div className="flex justify-center items-center">
          {[...Array(4)].map((_, index) => (
            <img

              key={index}
              className="w-[10px] h-[10px] md:w-[30px] md:h-[30px] mx-1"
              src={yellowStarImage}
              alt={`Image ${index + 1}`}
            />
          ))}
                    {[...Array(1)].map((_, index) => (
            <img
              key={index}
              className="w-[12px] h-[12px] md:w-[32px] md:h-[32px] mx-1"
              src={grayStarImage}
              alt={`Image ${index + 1}`}
            />
          ))}
          <p className="mx-2 md:mx-8 text-2xl font-semibold">4/5</p>
        </div>
      </div>
      <div className="w-10/12 my-5 flex flex-col gap-5 justify-center items-center xl:flex-row">
      <img className="md:w-[400px] md:h-[300px] rounded-3xl" src={opinionImage}></img>
        <p  className="text-center">
        Warszawa, stolica Polski, to dynamiczne miasto o bogatej historii i
        kulturze, które stale ewoluuje, łącząc tradycję z nowoczesnością. Znana
        jest z imponującej architektury, gdzie można znaleźć zarówno zabytkowe
        budowle jak i nowoczesne wieżowce. Przez całą historię Warszawa była
        świadkiem wielu ważnych wydarzeń, w tym powstań narodowych i
        przełomowych momentów w historii Polski. Miasto oferuje bogate życie
        kulturalne, z licznymi muzeami, teatrami i festiwalami sztuki,
        przyciągając miłośników kultury z całego świata. Warszawa to także
        centrum biznesowe i naukowe, z licznymi instytucjami i uniwersytetami.
        Jednocześnie, zielone tereny, parki i bulwary nad Wisłą pozwalają
        mieszkańcom i turystom na relaks i odpoczynek w otoczeniu przyrody.
        Miasto jest również znane z różnorodności kulinarnych doznań, oferując
        smaki zarówno tradycyjnej polskiej kuchni, jak i kuchni międzynarodowej.
        Ostatecznie, Warszawa jest miejscem, które stale się rozwija i przyciąga
        ludzi z różnych kultur i tła, tworząc mieszankę atmosferyczną i pełną
        energii.
        </p>
    

      </div>
    </div>
  );
};

export default OpinionPanel;
