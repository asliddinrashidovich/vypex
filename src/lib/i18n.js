import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translation.json";
import arTranslations from "./locales/ar/translation.json";
import duTranslations from "./locales/du/translation.json";
import spTranslations from "./locales/sp/translation.json";

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      du: {
        translation: duTranslations,
      },
      ar: {
        translation: arTranslations,
      },
      sp: {
        translation: spTranslations,
      },
    },
  });

export default i18n;