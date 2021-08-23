import React, { useState, useLayoutEffect } from "react";

import Input from "../Input";
import Button from "../Button";
import { ButtonTypes } from "../Button/types";

import * as types from "./types";

import * as utils from "../../utils";

const Form: React.FC<types.FormProps> = ({
  config,
  onSubmit,
  buttonTitle,
}): JSX.Element => {
  const [formFields, setFormFields] = useState<types.Fields>({});
  const [isFieldsValid, setIsFieldsValid] = useState<types.ValidationFields>(
    {},
  );

  // creates fields dynamicly
  useLayoutEffect(() => {
    const fields: types.Fields = {};
    const ValidationFields: types.ValidationFields = {};

    config.forEach((field: types.ConfigItem) => {
      const { name } = field;

      if (field.isRequired) ValidationFields[name] = false;
      fields[name] = "";
    });

    setFormFields(fields);
    setIsFieldsValid(ValidationFields);
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
      if (field.isRequired) {
        state[field.name] = false;
      }
    });

    fields = [...Object.keys(state)];
    fields.forEach((field) => {
      if (field === "email") {
        state[field] = !utils.regExEmail.test(formFields[field]);
      } else {
        state[field] = !formFields[field].length;
      }
    });

    setIsFieldsValid(state);

    return Object.values(state).includes(true);
  };

  const onSubmitForm = () => {
    const checkResult = isValidationError(config);

    if (!checkResult)
      onSubmit(formFields.email, formFields.password, formFields.firstName);
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
            isError={isFieldsValid[item.name]}
            onAction={onChangeFieldsValue}
            isRequired={item.isRequired}
            placeholder={item.placeholder}
            errorText={item.errorText}
            passwordType={item.passwordType}
          />
        ))}
        <Button
          title={buttonTitle}
          onClick={onSubmitForm}
          buttonType={ButtonTypes.button}
        />
      </form>
    </div>
  );
};

export default Form;
