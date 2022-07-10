import "./App.css";
import { Trans, useTranslation } from "react-i18next";
import SimpleForm from "./Components/SimpleForm";
import { useState } from "react";
import i18n from "./i18n";
import { DateFormatter } from "./Components/DateFormatter";

function App() {
  const { t } = useTranslation();
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
          <button value="fr" onClick={handleLanguageChange}>
            French
          </button>
        </div>
      </section>
      <section className="App-Main_Content">
        <h1>{t("Welcome to React")}</h1>
        {/* <DateFormatter /> */}
        <SimpleForm lang={language} />
      </section>
    </div>
  );
}

export default App;
