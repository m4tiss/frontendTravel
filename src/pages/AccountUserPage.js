import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import userImage from "../images/UserImage.png";
import { FaRegEdit } from "react-icons/fa";
import FavouritePanel from "../components/FavouriteCities";
import axios from "../config/axios";
import { useAuth } from "../provider/AuthProvider";
import Modal from "react-modal";
import EditUserModal from "../components/EditUserModal";

const AccountUserPage = () => {
  const { t, i18n } = useTranslation();

  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    toogleModal();
    window.location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/getUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = response.data;
        setUser(userData);
      } catch (error) {
        console.error("Błąd podczas pobierania danych użytkownika:", error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  console.log(user);

  return (
    <div className="w-full min-h-full">
      <div className="w-full mt-10 md:flex md:mt-32">
        <div className="flex-1 my-10 flex justify-center items-center md:my-0">
          {user && user.userImage ? (
            <img
              src={`${process.env.REACT_APP_IMAGES_URL}usersImages/${user.userImage}`}
              alt="User Avatar"
              className="w-[300px] md:w-[400px] rounded-3xl shadow-2xl"
            />
          ) : (
            <img
              src={userImage}
              alt="Default User Avatar"
              className="w-[300px] md:w-[400px] rounded-3xl shadow-2xl"
            />
          )}
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-evenly border-4 shadow-2xl bg-gray-100 border-gray-400 rounded-3xl w-80 h-80 md:w-96 md:h-96">
            <div className="flex flex-col justify-center items-center gap-10">
              {user && (
                <>
                  <h2 className="px-10 mb-5 text-black-700 text-2xl font-semibold">
                    Nickname: {user.nickname}
                  </h2>
                  <h2 className="px-10 mb-5 text-black-700 text-2xl font-semibold">
                    Email: {user.email}
                  </h2>
                </>
              )}
              <FaRegEdit
                className="cursor-pointer transition duration-400 transform hover:rotate-45"
                size={40}
                color="green"
                onClick={()=>toogleModal()}
              />
            </div>
            <Modal
              isOpen={showModal}
              className={"fixed inset-0 flex justify-center items-center"}
            >
              <EditUserModal onClose={onClose} />
            </Modal>
          </div>
        </div>
      </div>
      <div>
        <FavouritePanel />
      </div>
    </div>
  );
};

export default AccountUserPage;
