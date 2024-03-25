import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pl: {
    translation: {
      navbar: {
        showAll: "Zobacz wszystkie",
        register: "Zarejestruj się",
        logIn: "Zaloguj się",
        logout: "Wyloguj",
      },

      mostPopularCities: "Najbardziej popularne miasta",

      mainImage: {
        header: "Zwiedzaj świat i dziel się tym z nami",
        description:
          "Zostaw swoją opinie, oceń swoje ulubione miejsce i pochwal się",
        button: "Zaczynajmy",
      },

      footer: {
        help: "Pomoc",
        regulations: "Regulamin",
        faq: "FAQ",
        tutorials: "Poradniki",
        information: "Informacje",
        contact: "Kontakt",
        privacyPolicy: "Polityka prywatności",
        aboutUs: "O nas",
        followUs: "Obserwuj Nas",
        aboutUsText: `TripTrackers to platforma stworzona dla pasjonatów podróży, gdzie możesz
        dzielić się swoimi opiniami i ocenami na temat odwiedzanych miast. Nasza
        społeczność skupia entuzjastów podróży z całego świata, którzy chcą
        dzielić się swoimi doświadczeniami, pomagać innym podróżnym w wyborze
        miejsc do odwiedzenia i tworzyć społeczność pełną cennych wskazówek i
        inspiracji podróżniczych. Niezależnie od tego, czy chcesz polecić ukrytą
        restaurację w ulubionym mieście, podzielić się wrażeniami z wędrówki po
        górach czy po prostu przeczytać opinie innych podróżnych, TripTrackers
        to miejsce, gdzie Twoje doświadczenia nabierają życia. Dołącz do nas już
        dziś i zacznij dzielić się swoimi podróżniczymi przygodami!`,
        phoneNumber: "Telefon",
        regulationsText1:
          "1.Rejestrując się na naszej platformie, zgadzasz się przestrzegać zasad określonych w regulaminie.",
        regulationsText2:
          "2.Zabrania się publikowania treści wulgarnych, obraźliwych, groźnych, zawierających dyskryminację, nienawiść lub przemoc.",
        regulationsText3:
          "3.Każdy użytkownik ponosi odpowiedzialność za treści, które publikuje na platformie TripTrackers.",
        regulationsText4:
          "4.Zastrzegamy sobie prawo do usuwania treści naruszających regulamin oraz do blokowania użytkowników, którzy nie przestrzegają zasad.",
        regulationsText5:
          "5.Korzystając z TripTrackers, zgadzasz się na przetwarzanie swoich danych osobowych zgodnie z naszą polityką prywatności.",
      },

      cityPage: {
        population: "Ludność",
        country: "Kraj",
        continent: "Kontynent",
        rating: "Średnia ocena",
        userReviews: "Opinie użytkowników",
        addReview: "Dodaj opinie",
        addToFavorites: "Dodaj do ulubionych",
        noReviewsAvailable: "Brak dostępnych opini",
        noRating: "Brak oceny",
        removeFromFavourites: "Usuń z ulubionych",
      },
      login: {
        login: "Logowanie",
        logIn: "Zaloguj się",
        incorrectData: "Nieprawidłowe dane",
      },
      register: {
        registartion: "Rejestracja",
        register: "Zarejestruj się",
        accountExist: "Mam już konto",
      },
      allCities: {
        filter: "Filtruj",
        search: "Czego szukasz?",
        country: "Kraj",
        continent: "Kontynent",
        sort: "Sortuj",
        upText:
          "Zaplanuj swoje podróże, odkrywaj nowe miejsca, dziel się swoimi wrażeniami - podróżuj, zwiedzaj, oceniaj, i kreuj niezapomniane wspomnienia!",
        page: "Strona",
        all: "Wszystkie",
        sortAscending: "Ocena rosnąco",
        sortDescending: "Ocena malejąco",
        sortAZ: "A-Z",
        sortZA: "Z-A",
      },
      favouritesCities: "Ulubione miasta",
      noFavourite: "Brak ulubionych miast",
      admin: {
        addCountry: "Dodaj kraj",
        editCountry: "Edytuj kraj",
        addCity: "Dodaj miasto",
        editCity: "Edytuj miasto",
        removeReview: "Usuń opinie",
        stats1: "Liczba użytkowników na poratlu:",
        stats2: "Miasto z najwyższą oceną:",
        stats3: "Średnia liczba opini na użytkownika:",
        stats4: "Najaktywniejszy użytkownik:",
      },
      modals: {
        addReview: "Dodaj opinie",
        title: "Tytuł",
        description: "Opis",
        choosenFile: "Wybierz plik",
        selectedFile: "Wybrany plik",
        noFile: "Nie wybrano pliku",
        cancel: "Anuluj",
        addCity: "Dodaj miasto",
        name: "Nazwa",
        population: "Liczba ludności",
        editCity: "Edytuj miasto",
        listOfCities: "Lista miast",
        addCountry: "Dodaj kraj",
        flag: "Flaga",
        editCountry: "Edytuj kraj",
        editUser: "Edytuj użytkownika",
        rating: "Ocena",
        removeReview: "Usuń opinie"
      },
    },
  },
  en: {
    translation: {
      navbar: {
        showAll: "Show All",
        register: "Register",
        logIn: "Log In",
        logout: "Logout",
      },

      mostPopularCities: "Most popular cities",

      mainImage: {
        header: "Explore the world and share it with us",
        description:
          "Leave your opinion, rate your favorite place, and show off",
        button: "Let's start",
      },

      footer: {
        help: "Help",
        regulations: "Regulations",
        faq: "FAQ",
        tutorials: "Tutorials",
        information: "Information",
        contact: "Contact",
        privacyPolicy: "Privacy Policy",
        aboutUs: "About Us",
        followUs: "Follow Us",
        aboutUsText: `TripTrackers is a platform created for travel 
        enthusiasts where you can share your opinions and reviews 
        about the cities you visit. Our community gathers travel enthusiasts 
        from all over the world who want to share their experiences, help other 
        travelers choose places to visit, and create a community full of valuable 
        travel tips and inspiration. Whether you want to recommend a hidden 
        restaurant in your favorite city, share impressions of hiking in the
         mountains, or simply read reviews from other travelers, TripTrackers 
         is the place where your experiences come to life. Join us today and start
          sharing your travel adventures!`,
        phoneNumber: "Phone number",
        regulationsText1:
          "1. By registering on our platform, you agree to adhere to the rules specified in the terms and conditions.",
        regulationsText2:
          "2. Publishing vulgar, offensive, threatening, discriminatory, hateful, or violent content is prohibited.",
        regulationsText3:
          "3. Each user is responsible for the content they publish on the TripTrackers platform.",
        regulationsText4:
          "4. We reserve the right to remove content that violates the terms and conditions and to block users who do not comply with the rules.",
        regulationsText5:
          "5. By using TripTrackers, you agree to the processing of your personal data in accordance with our privacy policy.",
      },
      cityPage: {
        population: "Population",
        country: "Country",
        continent: "Continent",
        rating: "Average rating",
        userReviews: "User reviews",
        addReview: "Add review",
        addToFavorites: "Add to favorites",
        noReviewsAvailable: "No reviews available",
        noRating: "No rating",
        removeFromFavourites: "Remove from favourites",
      },
      login: {
        login: "Login",
        logIn: "Log In",
        incorrectData: "Inncorect data",
      },
      register: {
        registartion: "Registartion",
        register: "Register",
        accountExist: "I already have an account",
      },
      allCities: {
        filter: "Filter",
        search: "Looking for?",
        country: "Country",
        continent: "Continent",
        sort: "Sort",
        upText:
          "Plan your trips, discover new places, share your experiences - travel, explore, rate, and create unforgettable memories!",
        page: "Page",
        all: "All",
        sortAscending: "Ascending",
        sortDescending: "Descending",
        sortAZ: "A-Z",
        sortZA: "Z-A",
      },
      favouritesCities: "Favourites cities",
      noFavourite: "No favourites",
      admin: {
        addCountry: "Add country",
        editCountry: "Edit country",
        addCity: "Add city",
        editCity: "Edit city",
        removeReview: "Remove review",
        stats1: "Number of users on the portal:",
        stats2: "City with the highest rating:",
        stats3: "Average number of reviews per user:",
        stats4: "Most active user:",
      },
      modals: {
        addReview: "Add review",
        title: "Title",
        description: "Description",
        choosenFile: "Choosen file",
        selectedFile: "Selected file",
        noFile: "No file selected",
        cancel: "Cancel",
        addCity: "Add city",
        name: "Name",
        population: "Population",
        editCity: "Edit city",
        listOfCities: "List of cities",
        addCountry: "Add country",
        flag: "Flag",
        editCountry: "Edit country",
        editUser: "Edit user",
        rating: "Rating",
        removeReview: "Remove review"
      },
    },
  },
};

const localStorageKey = "selectedLanguage";

const getDefaultLanguage = () => {
  const selectedLanguage = localStorage.getItem(localStorageKey);
  if (selectedLanguage) {
    return selectedLanguage;
  } else {
    return "pl";
  }
};

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: getDefaultLanguage(),
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export const setLanguage = (language) => {
  i18n.changeLanguage(language);
  localStorage.setItem(localStorageKey, language);
};

export default i18n;
