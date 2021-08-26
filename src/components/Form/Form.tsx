import React, { useState, useLayoutEffect } from "react";

import Input from "../Input";
import Button from "../Button";
import { ButtonTypes } from "../Button/types";

import * as types from "./types";

import * as utils from "../../utils";

import * as constants from "../../constants";

const Form: React.FC<types.FormProps> = ({ config, onSubmit, buttonTitle }): JSX.Element => {
  const [formFields, setFormFields] = useState<types.Fields>({});
  const [isFieldsValid, setIsFieldsValid] = useState<types.ValidationFields>({});

  // creates fields dynamicly
  useLayoutEffect(() => {
    const fields: types.Fields = {};
    const validationFields: types.ValidationFields = {};

    config.forEach((field: types.ConfigItem) => {
      const { name } = field;

      if (field.required) validationFields[name] = "";

      fields[name] = "";
    });

    setFormFields(fields);
    setIsFieldsValid(validationFields);
  }, [config]);

  const onChangeFieldsValue = (e: any) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  // validates form fields
  const isValidationError = (config: types.ConfigItem[]): boolean => {
    const state: types.ValidationFields = {};
    let fields = [];

    config.forEach((field: types.ConfigItem) => {
      if (field.required) {
        state[field.name] = "";
      }
    });

    fields = [...Object.keys(state)];
    fields.forEach((field) => {
      if (field === "email") {
        !utils.validateEmail.test(formFields[field])
          ? (state[field] = constants.errors.wrongEmail)
          : (state[field] = "");
      } else if (field === "repeatedPassword" && formFields[field].length) {
        formFields[field] === formFields.password
          ? (state[field] = "")
          : (state[field] = constants.errors.repeatedPassword);
      } else if (formFields[field].length) {
        state[field] = "";
      } else {
        state[field] = constants.errors.emptyField;
      }
    });

    setIsFieldsValid(state);

    return Object.values(state).every((item: any) => !item.length);
  };

  const onSubmitForm = () => {
    const isFormValid = isValidationError(config);

    if (isFormValid) onSubmit(formFields);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={() => {}}>
        {config.map((item: types.ConfigItem) => (
          <Input
            key={item.name}
            name={item.name}
            type={item.type}
            label={item.label}
            onChange={onChangeFieldsValue}
            required={item.required}
            placeholder={item.placeholder}
            errorText={isFieldsValid[item.name]}
            passwordType={item.passwordType}
          />
        ))}
        <Button title={buttonTitle} onClick={onSubmitForm} buttonType={ButtonTypes.button} />
      </form>
    </div>
  );
};

export default Form;
