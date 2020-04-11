import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector) // detect user language
  .use(Backend) // load translations from ../public/locales/<IETF code>/translation.json
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: "en",

    detection: {
      // TODO: persist the language in local storage?
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },

    interpolation: {
      escapeValue: false, // React escapes by default
    },

    react: {
      useSuspense: false
    },

    // common namespace for the whole app
    /*
    ns: ["translations"],
    defaultNS: "translations",
    */
  });

export default i18n;
