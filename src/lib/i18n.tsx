import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../locales/en.json";
import ptTranslation from "../locales/pt.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "pt",
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
  },
});

export { i18n };
