import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pl: {
    translation: {
      navbar: {
        showAll: "Zobacz wszystkie",
        register: "Zarejestruj się",
        logIn: "Zaloguj się"
      },

      mostPopularCities : "Najbardziej popularne miasta",
      
      mainImage:{
        header: "Zwiedzaj świat i dziel się tym z nami",
        description: "Zostaw swoją opinie, oceń swoje ulubione miejsce i pochwal się",
        button: "Zaczynajmy"
      },

      footer:{
        help: "Pomoc",
        regulations: "Regulamin",
        faq: "FAQ",
        tutorials: "Poradniki",
        information: "Informacje",
        contact: "Kontakt",
        privacyPolicy: "Polityka prywatności",
        aboutUs: "O nas",
        followUs: "Obserwuj Nas"
      },
      
      cityPage:{
        population: "Ludność",
        country: "Kraj",
        continent: "Kontynent",
        rating: "Ocena",
        userReviews: "Opinie użytkowników"
      },
      login:{
        login: "Logowanie",
        logIn: "Zaloguj się"
      },
      register:{
        registartion: "Rejestracja",
        register: "Zarejestruj się",
        accountExist: "Mam już konto"
      },
      allCities:{
        filter: "Filtruj",
        search: "Czego szukasz?",
        country: "Kraj",
        continent: "Kontynent",
        sort: "Sortuj",
        upText: "Zaplanuj swoje podróże, odkrywaj nowe miejsca, dziel się swoimi wrażeniami - podróżuj, zwiedzaj, oceniaj, i kreuj niezapomniane wspomnienia!",
        page: "Strona"

      },
      favouritesCities:"Ulubione miasta"
    },
  },
  en: {
    translation: {
      navbar: {
        showAll: "Show All",
        register: "Register",
        logIn: "Log In"
      },

      mostPopularCities : "Most popular cities",

      mainImage:{
        header: "Explore the world and share it with us",
        description: "Leave your opinion, rate your favorite place, and show off",
        button: "Let's start"
      },

      footer:{
        help: "Help",
        regulations: "Regulations",
        faq: "FAQ",
        tutorials: "Tutorials",
        information: "Information",
        contact: "Contact",
        privacyPolicy: "Privacy Policy",
        aboutUs: "About Us",
        followUs: "Follow Us"
      },
      cityPage:{
        population: "Population",
        country: "Country",
        continent: "Continent",
        rating: "Rating",
        userReviews: "User reviews"
      },
      login:{
        login: "Login",
        logIn: "Log In"
      },
      register:{
        registartion: "Registartion",
        register: "Register",
        accountExist: "I already have an account"
      },
      allCities:{
        filter: "Filter",
        search: "Looking for?",
        country: "Country",
        continent: "Continent",
        sort: "Sort",
        upText: "Plan your trips, discover new places, share your experiences - travel, explore, rate, and create unforgettable memories!",
        page: "Page"
        
      },
      favouritesCities:"Favourites cities"
    },
  },
};

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "pl",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
