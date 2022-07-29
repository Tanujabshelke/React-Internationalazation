import React from "react";
import "./App.css";
import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "./i18n";
import SimpleForm from "./Components/SimpleForm";
import { IntlProvider, load } from "@progress/kendo-react-intl";

// import { IntlProvider, load } from "@progress/kendo-react-intl";  //testing purpose
// import { DateFormatter } from "./Components/DateFormatter";
// import { English } from "./Translations/English/English";
// import { French } from "./Translations/French/French";
// import HocHook from "./Components/HowToUse/HocHook";
// import TranslationProps from "./Components/TranslationProp";
// load(English, French);    // for intlProvider

function App() {
  const { t } = useTranslation(["comman", "translation"]);
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    e.preventDefault();
    console.log("Language::", e.target.value);
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="App">
      <section className="App-header">
        <label className="App-label">Choose Your Language</label>
        <div className="App-btn">
          <button value="en" onClick={handleLanguageChange}>
            English
          </button>
          <button value="jp" onClick={handleLanguageChange}>
            Japanese
          </button>
        </div>
      </section>
      <section className="App-Main_Content">
        <h1>{t("translation:welcome")}</h1>
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <button onClick={() => alert(`${t("comman:alert:onSave")}`)}>
            {t("comman:button:save")}
          </button>
          <button onClick={() => alert(`${t("comman:alert:onDelete")}`)}>
            {t("comman:button:delete")}
          </button>
        </section>
        {/* <HocHook /> */}
        {/* <TranslationProps /> */}
        {/* <IntlProvider locale={language}>
          <DateFormatter />
        </IntlProvider>
        <br></br> */}
        {/* <SimpleForm lang={language} /> */}
      </section>
    </div>
  );
}

export default App;
