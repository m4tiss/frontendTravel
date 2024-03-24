import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import Modal from "react-modal";
import OpinionPanel from "../components/OpinionPanel";
import NewReviewModal from "../components/NewReviewModal";
import ReactStars from "react-stars";
import { useTranslation } from "react-i18next";
import axios from "../config/axios";
import { useAuth } from "../provider/AuthProvider";

const CityPage = () => {
  const { t } = useTranslation();
  let { cityId } = useParams();
  const [city, setCity] = useState({});
  const [opinions, setOpinions] = useState([]);
  const [rating, setRating] = useState();
  const { isAuth } = useAuth();

  useEffect(() => {
    axios.get(`/public/getCity/${cityId}`).then((res) => {
      const uploadedCity = res.data;
      console.log(uploadedCity);
      setCity(uploadedCity);
    });
  }, []);

  useEffect(() => {
    axios.get(`/public/getOpinionsByCity/${cityId}`).then((res) => {
      const uploadedOpinions = res.data;
      setOpinions(uploadedOpinions);
    });
  }, []);

  useEffect(() => {
    axios.get(`/public/getRatingByCity/${cityId}`).then((res) => {
      const rating = res.data;
      setRating(rating);
    });
  }, []);

  const continentName =
    city.country && city.country.continent && city.country.continent.name;
  const countryName = city.country && city.country.name;
  const flagImage = city.country && city.country.flagImage;
  const formattedPopulation = city.population
    ? city.population.toLocaleString()
    : null;

  const formattedRating = rating ? `${rating.toFixed(1)}` : null;

  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    toogleModal();
  };

  return (
    <div className="w-full min-h-full flex flex-col">
      <div className="w-full flex flex-col gap-5 items-center md:justify-evenly md:flex-row  my-20 ">
        <div className="relative w-[300px] h-[200px] md:w-[450px] md:h-[250px] xl:w-[900px] xl:h-[500px] rounded-xl shadow-2xl mb-10 md:mb-0 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={`${process.env.REACT_APP_IMAGES_URL}citiesImages/${city.cityImage}`}
            alt={city.name}
          />
          <div className="overflow-y-auto lg:overflow-y-hidden absolute inset-0 flex justify-center items-center bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 rounded-xl">
            <p className="flex justify-center flex-wrap items-center p-5 h-full text-white opacity-0 hover:opacity-100 duration-700 ease-in-out text-center transform translate-y-20 hover:translate-y-0">
              {city.description}
            </p>
          </div>
        </div>

        <div className="w-80 md:w-96 border-4 shadow-2xl bg-gray-100 border-yellow-400 rounded-3xl">
          <h2 className="font-semibold text-3xl text-center mt-10 ">
            {city.name}
          </h2>
          <p className="mx-8 mt-8">
            {t("cityPage.continent")}: {continentName}
          </p>
          <div className="flex mx-8 mt-8">
            <p>
              {t("cityPage.country")}: {countryName}
            </p>
            <ReactCountryFlag
              className="mx-3 -mt-2"
              countryCode={flagImage}
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="PL"
            />
          </div>
          <p className="mx-8 mt-8">
            {t("cityPage.population")}: {formattedPopulation}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center">
            {formattedRating ? (
              <>
                <h2 className="text-2xl font-semibold">
                  {t("cityPage.rating")}
                </h2>
                <div className="flex justify-end items-end">
                  <p className="text-5xl font-semibold mt-5">
                    {formattedRating}
                  </p>
                  <p className=" text-xl font-semibold mt-5">/5</p>
                </div>
                <div className="flex">
                  <ReactStars
                    count={5}
                    size={50}
                    value={formattedRating}
                    edit={false}
                    color2={"#ffd700"}
                  />
                </div>
              </>
            ) : (
              <p className="text-red-600 text-3xl my-5">
              {t("cityPage.noRating")}
            </p>
            )}
          </div>
        </div>
      </div>

      <h2 className="text-black text-2xl my-10 font-bold text-center justify-center items-center">
        {t("cityPage.userReviews")}✎
      </h2>
      {isAuth() ? (
        <div className="w-full flex justify-evenly items-center mb-10">
          <button
            onClick={toogleModal}
            className="bg-blue-500 w-40 h-20 rounded-full shadow-2xl hover:bg-blue-700 text-white"
          >
            {t("cityPage.addReview")} ✎
          </button>
          <button className="bg-yellow-500 w-40 h-20 rounded-full hover:bg-yellow-600 shadow-2xl text-white">
            {t("cityPage.addToFavorites")} ⭐
          </button>
        </div>
      ) : null}

      <Modal
        isOpen={showModal}
        className={"fixed inset-0 flex justify-center items-center"}
      >
        <NewReviewModal cityId={city.cityId} onClose={onClose} />
      </Modal>
      <div className="flex flex-col w-4/5 items-center mx-auto">
        {opinions.length > 0 ? (
          opinions.map((opinion) => (
            <OpinionPanel key={opinion.opinionId} opinion={opinion} />
          ))
        ) : (
          <p className="text-red-600 my-10 text-3xl">
            {t("cityPage.noReviewsAvailable")}
          </p>
        )}
      </div>
    </div>
  );
};

export default CityPage;
