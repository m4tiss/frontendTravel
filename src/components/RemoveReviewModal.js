import { React, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "../config/axios";

const RemoveReviewModal = (props) => {
  const { t } = useTranslation();

  const [opinions, setOpinions] = useState([]);


  useEffect(() => {
    axios.get("/public/getAllOpinions").then((res) => {
      const uploadedOpinions = res.data;
      console.log(uploadedOpinions)
      setOpinions(uploadedOpinions);
    });
  }, []);

  const handleDelete = (opinionId) => {
    axios
      .delete(`/removeOpinion/${opinionId}`)
      .then((res) => {
        console.log('Opinia została usunięta');
        props.onClose();
      })
      .catch((err) => {
        console.error('Błąd podczas usuwania opinii:', err);
      });
  };

  return (
    <div className=" bg-white w-8/12 border-2 max-h-[700px] border-blue-600 rounded-xl flex flex-col">
      <div className="flex flex-col items-center my-10 ">
        <h2 className="text-center text-2xl md:mt-10 md:mb-5 font-semibold md:text-4xl">
          {t('modals.removeReview')}
        </h2>

        <div className="flex flex-col overflow-y-scroll max-h-[300px] my-10">
        {opinions.map((opinion) => (
            <div
              key={opinion.opinionId}
              className="min-h-40 justify-evenly items-center flex bg-gray-200 my-2 text-2xl rounded-full px-10"
            >
              <div className="flex flex-col px-5 min-w-52">
              <p>{opinion.user.nickname}</p>
              <p>{opinion.title}</p>
              </div>
              <button onClick={() => handleDelete(opinion.opinionId)}>
                <RiDeleteBin5Line 
                  className="cursor-pointer transition duration-400 transform hover:rotate-45"
                  size={30}
                  color="red"
                />
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row  w-full md:justify-evenly items-center">
          <button className="bg-red-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-red-600 shadow-2xl text-white">
            {t('modals.removeReview')}
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

export default RemoveReviewModal;
