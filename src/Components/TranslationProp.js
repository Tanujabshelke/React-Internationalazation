import React from "react";
import { Translation } from "react-i18next";

function TranslationProps() {
  return (
    <div>
      <Translation ns="translation">
        {(t, { i18n }) => {
          return <p>{t("translation:welcome")}</p>;
        }}
      </Translation>
    </div>
  );
}

export default TranslationProps;
