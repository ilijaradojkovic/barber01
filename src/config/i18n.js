import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import JSON fajlova
import translationRUS from "../../public/locales/rus/translation.json";
import translationSRB from "../../public/locales/srb/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      rus: { translation: translationRUS },
      srb: { translation: translationSRB },
    },
    fallbackLng: "srb",
    debug: true,
    interpolation: { escapeValue: false },
  });

export default i18n;
