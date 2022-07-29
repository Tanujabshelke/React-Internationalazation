import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const JsonParser = (parameter) => {
  //we need to provide guideline for naming conventions , like diff productt ,name should start with it's abbrevation and the type of translation key
  //consider this is Json which sort different modules translation
  const JSON_Obj = {
    BI_comman_msg: `../public/locales/`,
    MI_comman_msg: `../public/locales/`
  };
  return JSON_Obj.parameter;
};

const pathParser = (lnges, nameSpace) => {
  //let consider public is folder where all translation folder stored.
  const module = JsonParser("BI_comman_msg");
  return `${module}{{${lnges}}}/{{${nameSpace}}}.json `;
};

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next) // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // path: { localpath: "../public/locales/{{lng}}/{{ns}}.json" }, //one way to use pass path ,kind of static path
    path: pathParser(), //2nd way to pass path ,kind of dynamic path
    lng: "en",
    fallbackLng: "en", //any language not choosen then this is Default language
    debug: true, //for console.log

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default (interpolation mean inserting dynamic value)
    }
  });

//Loading namespaces
//i18n.loadNamespaces([{ comman: "" }]);

export default i18n;
