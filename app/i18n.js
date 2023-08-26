import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeEN from "../public/locales/en/home.json";
import homePT from "../public/locales/pt/home.json";

const resources = {
  en: {
    translation: homeEN,
  },
  pt: {
    translation: homePT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
