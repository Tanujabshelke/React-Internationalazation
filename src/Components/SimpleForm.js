import * as React from "react";
import * as ReactDOM from "react-dom";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import "@progress/kendo-theme-default/dist/all.css";
import { useTranslation } from "react-i18next";

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";
const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const SimpleForm = ({ lang }) => {
  console.log("lang::", lang);
  const { t } = useTranslation();
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement
          style={{
            maxWidth: 550
          }}
        >
          <fieldset className={"k-form-fieldset"}>
            <legend className={"k-form-legend"}>{t("form caption")}</legend>
            <div className="mb-3">
              <Field
                name={"firstName"}
                component={Input}
                label={t("first name")}
              />
            </div>

            <div className="mb-3">
              <Field
                name={"lastName"}
                component={Input}
                label={t("last name")}
              />
            </div>

            <div className="mb-3">
              <Field
                name={"email"}
                type={"email"}
                component={EmailInput}
                label={t("email")}
                validator={emailValidator}
              />
            </div>
          </fieldset>
          <div className="k-form-buttons">
            <button
              type={"submit"}
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              disabled={!formRenderProps.allowSubmit}
            >
              {t("submit")}
            </button>
          </div>
        </FormElement>
      )}
    />
  );
};
export default SimpleForm;
