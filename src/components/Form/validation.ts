import * as types from "./types";
import * as utils from "../../utils";
import { Errors } from "../../types/formErrors";

export const isValidationError = (
  config: types.ConfigItem[],
  setIsFieldsValid: Function,
  formFields: types.Fields,
): boolean => {
  const validationFields: types.ValidationFields = {};
  let fields = [];

  config.forEach((field: types.ConfigItem) => {
    if (field.required) {
      validationFields[field.name] = "";
    }
  });

  fields = [...Object.keys(validationFields)];
  fields.forEach((field) => {
    let checkField = field;

    if (field === "email") {
      checkField = !utils.validateEmail.test(formFields[field]) ? Errors.wrongEmail : "";
    } else if (field === "repeatedPassword" && formFields[field].length) {
      checkField =
        formFields[field] === formFields.password
          ? (checkField = "")
          : (checkField = Errors.repeatedPassword);
    } else if (formFields[field].length) {
      checkField = "";
    } else {
      checkField = Errors.emptyField;
    }
    validationFields[field] = checkField;
  });

  setIsFieldsValid(validationFields);

  return Object.values(validationFields).every((item: any) => !item.length);
};
