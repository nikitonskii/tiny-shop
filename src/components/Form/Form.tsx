import React, { useState, useLayoutEffect } from "react";

import Input from "../Input";
import Button from "../Button";
import { ButtonTypes } from "../Button/types";

import * as types from "./types";

import { isValidationError } from "./validation";

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

  const onSubmitForm = () => {
    const isFormValid = isValidationError(config, setIsFieldsValid, formFields);

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
            isShowPasswordIcon={item.isShowPasswordIcon}
          />
        ))}
        <Button title={buttonTitle} onClick={onSubmitForm} buttonType={ButtonTypes.button} />
      </form>
    </div>
  );
};

export default Form;
