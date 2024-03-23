import { React, useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { FaRegEdit } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useAuth } from '../provider/AuthProvider';
import axios from "../config/axios";

const EditUserModal = (props) => {
  const { t } = useTranslation();

  const [data, setData] = useState({
    nickname: "",
    email: "",
  });

  const { setTokenNull,token } = useAuth();
  const [user, setUser] = useState(null);


  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get("/getUser", {
                  headers: {
                      Authorization: `Bearer ${token}`
                  }
              });
              const userData = response.data;
              setUser(userData);
              setData({
                nickname: userData.nickname,
                email: userData.email
            });
          } catch (error) {
              console.error("Błąd podczas pobierania danych użytkownika:", error);
          }
      };
  
      if (token) {
          fetchData();
      }
  }, [token]);


  const handleEdit = () => {
    axios
      .put(`/updateUser`, data)
      .then((res) => {
        props.onClose();
      })
      .catch((error) => {
        console.error("Error user city:", error);
      });
  };

  return (
    <div className="bg-white w-8/12 border-2 border-blue-600 rounded-xl flex flex-col items-center">
        <div className="w-full flex flex-col items-center my-10">
          <h2 className="text-center text-2xl md:mt-10 md:mb-5 font-semibold md:text-4xl">
            {t("modals.editUser")} ✎
          </h2>
          <input
            className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl shadow-2xl h-16 w-1/2 md:my-10"
            placeholder="Nickname"
            value={data.nickname}
            onChange={(e) => setData({ ...data, nickname: e.target.value })}
          />
                    <input
            className="border-2 p-5 border-yellow-500 outline-none my-5 text-2xl shadow-2xl h-16 w-1/2 md:my-10"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <div className="flex flex-col md:flex-row  w-full md:justify-evenly items-center">
            <button
              onClick={handleEdit}
              className="bg-yellow-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-yellow-600 shadow-2xl text-white"
            >
              {t("modals.editUser")}
            </button>
            <button
              onClick={props.onClose}
              className="bg-red-500 my-2 md:my-0 h-12 w-24 md:w-40 md:h-20 rounded-full hover:bg-red-600 shadow-2xl text-white"
            >
              {t("modals.cancel")}
            </button>
          </div>
        </div>

    </div>
  );
};

export default EditUserModal;
