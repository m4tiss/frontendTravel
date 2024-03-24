import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import axios from "../config/axios";

const Registration = () => {
  const { t } = useTranslation();

  const [isUpload, setIsUpload] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState(
    `${t("modals.noFile")}`
  );
  const [data, setData] = useState({
    nickname: "",
    email: "",
    password: "",
    userImage: "",
  });

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(`${t("modals.selectedFile")}: ${file.name}`);
      setIsUpload(true);
    } else {
      setSelectedFileName(`${t("modals.noFile")}`);
      setIsUpload(false);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    try {
      if (!data.nickname || !data.email || !data.password || !data.userImage) {
        toast.error("Wpisz dane");
        return;
      }

      if (!validateEmail(data.email)) {
        toast.error("Nieprawidłowy adres email");
        return;
      }

      const formData = new FormData();
      formData.append("image", data.userImage);
      formData.append("path", "usersImages/");

      const imageResponse = await axios.post("/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Zdjęcie");

      const cityData = {
        nickname: data.nickname,
        email: data.email,
        password: data.password,
        userImage: data.userImage.name,
      };

      await axios.post("/auth/register", cityData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setData({
        nickname: "",
        email: "",
        password: "",
        userImage: "",
      });
      setIsUpload(false);
      setSelectedFileName(`${t("modals.noFile")}`);

      toast.success("Udało ci się zarejestrować");
    } catch (error) {
      toast.error("Rejestracja nie powiodła się");
    }
  };

  return (
    <div className="w-full h-full flex justify-evenly">
      <div className="hidden lg:flex justify-center">
        <img
          src={`${process.env.REACT_APP_IMAGES_URL}LoginImage.jpg`}
          className="h-[750px] mt-5"
        />
      </div>
      <div className="w-80 flex flex-col md:mt-32 md:w-96">
        <h2 className="text-blue-500 text-4xl font-semibold my-10 text-center">
          {t("register.registartion")}
        </h2>
        <input
          placeholder="Nickname"
          className="border-blue-500 border-solid border-l-8 p-2 text-3xl my-2 outline-none bg-slate-200"
          value={data.nickname}
          onChange={(e) => setData({ ...data, nickname: e.target.value })}
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="border-blue-500 border-solid border-l-8 p-2 text-3xl my-2 outline-none bg-slate-200"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        ></input>
        <input
          placeholder="Password"
          className="border-blue-500 border-solid border-l-8 p-2 text-3xl my-2 outline-none bg-slate-200"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        ></input>
        <label
          htmlFor="fileInput"
          class="h-12 mt-5 flex justify-center items-center px-4 py-2 bg-white-500 text-blue-400 border-2 border-blue-400 rounded-md 
          cursor-pointer transition-colors duration-300 hover:text-white hover:bg-blue-400"
        >
          {t("modals.choosenFile")}
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={(e) => {
            handleFileSelect(e);
            setData({ ...data, userImage: e.target.files[0] });
          }}
        />
        <div className="mb-5 text-blue-400">{selectedFileName}</div>

        <Link to="/Login">
          <p className="text-blue-500 font-semibold hover:underline hover:cursor-pointer text-end ">
            {t("register.accountExist")}
          </p>
        </Link>

        <div className="flex justify-center items-center m-6">
          <button
            onClick={() => handleSubmit()}
            className="text-xl bg-blue-400 w-96 h-10 font-semibold text-white border-2 border-blue-500 rounded-xl mx-2 hover:bg-slate-300"
          >
            {t("register.register")}
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Registration;
