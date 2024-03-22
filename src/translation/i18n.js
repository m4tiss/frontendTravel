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
        rating: "Średnia ocena",
        userReviews: "Opinie użytkowników",
        addReview: "Dodaj opinie",
        addToFavorites: "Dodaj do ulubionych"
      },
      login:{
        login: "Logowanie",
        logIn: "Zaloguj się",
        incorrectData: "Nieprawidłowe dane"
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
        page: "Strona",
        all: "Wszystkie",
        sortAscending: "Ocena rosnąco",
        sortDescending: "Ocena malejąco",
        sortAZ: "A-Z",
        sortZA: "Z-A"

      },
      favouritesCities:"Ulubione miasta",
      admin:{
        addCountry: "Dodaj kraj",
        editCountry: "Edytuj kraj",
        addCity: "Dodaj miasto",
        editCity: "Edytuj miasto",
        removeReview: "Usuń opinie",
        stats1: "Liczba użytkowników na poratlu:",
        stats2: "Miasto z najwyższą oceną:",
        stats3: "Średnia liczba opini na użytkownika:",
        stats4:"Najaktywniejszy użytkownik:"
      },
      modals:{
        addReview: "Dodaj",
        title: "Tytuł",
        description: "Opis",
        choosenFile:"Wybierz plik",
        selectedFile:"Wybrany plik",
        noFile: "Nie wybrano pliku",
        cancel: "Anuluj",
        addCity: "Dodaj miasto",
        name: "Nazwa",
        population: "Liczba ludności",
        editCity: "Edytuj miasto",
        listOfCities: "Lista miast",
        addCountry: "Dodaj kraj",
        flag:"Flaga",
        editCountry: 'Edytuj kraj'
      }
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
        rating: "Average rating",
        userReviews: "User reviews",
        addReview: "Add review",
        addToFavorites: "Add to favorites"
      },
      login:{
        login: "Login",
        logIn: "Log In",
        incorrectData: "Inncorect data"
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
        page: "Page",
        all: "All",
        sortAscending: "Ascending",
        sortDescending: "Descending",
        sortAZ: "A-Z",
        sortZA: "Z-A"
        
      },
      favouritesCities:"Favourites cities",
      admin:{
        addCountry: "Add country",
        editCountry: "Edit country",
        addCity: "Add city",
        editCity: "Edit city",
        removeReview: "Remove review",
        stats1: "Number of users on the portal:",
        stats2: "City with the highest rating:",
        stats3: "Average number of reviews per user:",
        stats4: "Most active user:"
      },
      modals:{
        addReview: "Add review",
        title: "Title",
        description: "Description",
        choosenFile:"Choosen file",
        selectedFile:"Selected file",
        noFile: "No file selected",
        cancel: "Cancel",
        addCity: "Add city",
        name: "Name",
        population: "Population",
        editCity: "Edit city",
        listOfCities: "List of cities",
        addCountry: "Add country",
        flag:"Flag",
        editCountry: 'Edit country'
      }
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
