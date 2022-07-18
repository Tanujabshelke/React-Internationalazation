import * as React from "react";
import { useInternationalization } from "@progress/kendo-react-intl";
export const DateFormatter = () => {
  const intl = useInternationalization();
  console.log("intl value :::", intl);
  return (
    <div className="col-xs-12 col-sm-6 example-col">
      <label>Locale date:</label>{" "}
      {intl.formatDate(new Date(2022, 10, 4), "EEEE, d-MMM-y")}
    </div>
  );
};
