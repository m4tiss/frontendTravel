import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import adminImage from "../images/AdminImage.png";
import AddCityModal from "../components/AddCityModal";
import EditCityModal from "../components/EditCityModal"
import EditCountryModal from "../components/EditCountryModal";
import AddCountryModal from '../components/AddCountryModal'
import RemoveReviewModal from "../components/RemoveReviewModal";

const AccountAdminPage = () => {
  const { t, i18n } = useTranslation();

  const [modals, setModals] = useState({
    addCountry: false,
    editCountry: false,
    addCity: false,
    editCity: false,
    removeReview: false,
  });

  const toggleModal = (modalName) => {
    setModals({
      ...modals,
      [modalName]: !modals[modalName],
    });
  };

  const onClose = () => {
    setModals({
      addCountry: false,
      editCountry: false,
      addCity: false,
      editCity: false,
      removeReview: false,
    });
  };

  return (
    <div className="w-full xl:flex my-10 xl:my-36 items-center xl:items-start">
      <div className="w-full xl:w-4/12 flex flex-col items-center ">
        <img
          className="w-[300px] h-[300px] shadow-2xl rounded-full"
          src={adminImage}
        ></img>
        <div className="bg-gray-200 shadow-2xl mt-10 w-80  xl:w-96 h-32 flex justify-center items-center">
          <h2 className="text-3xl  font-semibold">ADMIN</h2>
        </div>
      </div>
      <div className="w-full xl:w-8/12 flex flex-col">
        <div className="xl:flex">
          <div className="w-full xl:w-96 flex flex-col items-center gap-10 my-20 xl:my-0">
            <button onClick={() => toggleModal('addCountry')} className="bg-green-500 w-40 h-20 rounded-full shadow-2xl text-white">
              {t("admin.addCountry")}
            </button>
            <button onClick={() => toggleModal('editCountry')} className="bg-blue-400 w-40 h-20 rounded-full shadow-2xl text-white">
              {t("admin.editCountry")}
            </button>
            <button onClick={() => toggleModal('addCity')} className="bg-purple-500 w-40 h-20 rounded-full shadow-2xl text-white">
              {t("admin.addCity")}
            </button>
            <button onClick={() => toggleModal('editCity')} className="bg-yellow-500 w-40 h-20 rounded-full shadow-2xl text-white">
              {t("admin.editCity")}
            </button>
            <button onClick={() => toggleModal('removeReview')} className="bg-red-500 w-40 h-20 rounded-full shadow-2xl text-white">
              {t("admin.removeReview")}
            </button>
          </div>
          <div className="flex-grow flex flex-col gap-10 items-center">
            <div className="bg-gray-200 shadow-2xl w-10/12 h-28 flex justify-center items-center">
              <h2 className="text-xl xl:text-3xl p-2 font-semibold">
                {t("admin.stats1")}
              </h2>
              <h2 className="text-xl xl:text-3xl mx-2 ">200 000</h2>
            </div>
            <div className="bg-gray-200 shadow-2xl w-10/12 h-28 flex justify-center items-center">
              <h2 className="text-xl xl:text-3xl p-2 font-semibold">
                {t("admin.stats2")}
              </h2>
              <h2 className="text-xl xl:text-3xl mx-2">Warszawa</h2>
            </div>
            <div className="bg-gray-200 shadow-2xl w-10/12 h-28 flex justify-center items-center">
              <h2 className="text-xl xl:text-3xl p-2 font-semibold">
                {t("admin.stats3")}
              </h2>
              <h2 className="text-xl xl:text-3xl mx-2">3.4</h2>
            </div>
            <div className="bg-gray-200 shadow-2xl w-10/12 h-28 flex justify-center items-center">
              <h2 className="text-xl xl:text-3xl p-2 font-semibold">
                {t("admin.stats4")}
              </h2>
              <h2 className="text-xl xl:text-3xl mx-2">Maciuś2137</h2>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modals.addCountry}
        className={"fixed inset-0 flex justify-center items-center"}
      >
        <AddCountryModal onClose={onClose} />
      </Modal>
      <Modal
        isOpen={modals.editCountry}
        className={"fixed inset-0 flex justify-center items-center"}
      >
        <EditCountryModal onClose={onClose} />
      </Modal>
      <Modal
        isOpen={modals.addCity}
        className={"fixed inset-0 flex justify-center items-center"}
      >
        <AddCityModal onClose={onClose} />
      </Modal>
      <Modal
        isOpen={modals.editCity}
        className={"fixed inset-0 flex justify-center items-center"}
      >
        <EditCityModal onClose={onClose} />
      </Modal>
      <Modal
        isOpen={modals.removeReview}
        className={"fixed inset-0 flex justify-center items-center"}
      >
        <RemoveReviewModal onClose={onClose} />
      </Modal>
    </div>
  );
};

export default AccountAdminPage;
