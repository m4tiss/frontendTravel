import { React, useState, useEffect } from "react";
import ReactStars from "react-stars";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "../config/axios";

const OpinionPanel = (props) => {
  const [userOpinions, setuserOpinions] = useState([]);
  const [isUserOpinion, setIsUserOpinion] = useState(false);

  useEffect(() => {
    axios.get("/getUserOpinions").then((res) => {
      const uploadedUserOpinions = res.data;
      console.log(uploadedUserOpinions);
      setuserOpinions(uploadedUserOpinions);
    });
  }, []);

  useEffect(() => {
    const isOpinionExist = userOpinions.some(
      (opinion) => opinion.opinionId === props.opinion.opinionId
    );
    setIsUserOpinion(isOpinionExist);
  }, [userOpinions]);

  const handleDelete = () => {
    axios
      .delete(`/removeOpinion/${props.opinion.opinionId}`)
      .then((res) => {
        console.log("Opinia została usunięta");
        window.location.reload();
      })
      .catch((err) => {
        console.error("Błąd podczas usuwania opinii:", err);
      });
  };

  return (
    <div className="bg-white w-full my-3 m-h-40 border-4 border-yellow-400 rounded-3xl flex flex-col items-center">
      <div className="w-9/12 flex flex-col m-4 items-center justify-between xl:flex-row">
        <div className="flex items-center">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src={`${process.env.REACT_APP_IMAGES_URL}usersImages/${props.opinion.user.userImage}`}
          ></img>
          <p className="mx-10 font-semibold">{props.opinion.user.nickname}</p>
        </div>
        {isUserOpinion ? (
          <button onClick={() => handleDelete()}>
            <RiDeleteBin5Line
              className="cursor-pointer transition duration-400 transform hover:rotate-45 my-10"
              size={30}
              color="red"
            />
          </button>
        ) : null}
        <div className="flex justify-center items-center">
          <ReactStars
            count={5}
            size={50}
            value={props.opinion.rating}
            edit={false}
            color2={"#ffd700"}
          />

          <p className="mx-2 md:mx-8 text-3xl font-semibold pt-2">
            {props.opinion.rating}/5
          </p>
        </div>
      </div>
      <div className="w-10/12 my-5 flex flex-col gap-5 justify-center items-center xl:flex-row">
        <img
          className="md:w-[400px] md:h-[300px] rounded-3xl"
          src={`${process.env.REACT_APP_IMAGES_URL}opinionsImages/${props.opinion.opinionImage}`}
        ></img>
        <p className="text-center">{props.opinion.description}</p>
      </div>
    </div>
  );
};

export default OpinionPanel;
