import React from "react";
import { withTranslation } from "react-i18next";
import i18n from "../../i18n";

function HocHook({ t, i18n }) {
  return (
    <div>
      <p>{t("translation:welcome")}</p>
    </div>
  );
}

export default withTranslation("translation")(HocHook);
