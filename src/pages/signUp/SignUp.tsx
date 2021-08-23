<<<<<<< HEAD
import React, { useState } from "react";

import Button from "../../components/Button";
import { ButtonTypes } from "../../components/Button/types";

import { config } from "./config";

import Form from "../../components/Form";

const SignUp: React.FC = (): JSX.Element => {
  const [success, setSuccess] = useState<boolean>(false);

  const register = () => {
    setTimeout(() => console.log("you are registrated"), 1000);
    setTimeout(() => setSuccess(true), 1000);
=======
import React, { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import "./SignUpStyles.scss";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { ButtonTypes } from "../../components/Button/types";

import { config } from "./config";
import { syncRegistrate } from "../../store/actions/authActions";

import { Fields, ValidationFields, ConfigItem } from "./types";

import * as utils from "../../utils";

const SignUp: React.FC = (): JSX.Element => {
  const [success, setSuccess] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<Fields>({});
  const [isFieldsValid, setIsFieldsValid] = useState<ValidationFields>({});
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const fields: Fields = {};
    const validationVars: ValidationFields = {};

    config.forEach((field: ConfigItem) => {
      const { name } = field;

      if (field.isRequired) {
        fields[name] = "";
        validationVars[name] = false;
      } else {
        fields[name] = "";
      }
    });

    setFormFields(fields);
    setIsFieldsValid(validationVars);
  }, []);

  const onChangeFieldsValue = (e: any) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const isValidationError = (config: ConfigItem[]): boolean => {
    const state: ValidationFields = {};
    let fields = [];
    config.forEach((field: ConfigItem) => {
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

    return [...Object.values(state)].includes(true);
  };

  const makeFakeRequest = () => {
    const checkResult = isValidationError(config);

    if (!checkResult) {
      dispatch(
        syncRegistrate(
          formFields.firstName,
          formFields.password,
          formFields.email,
        ),
      );
      setTimeout(() => setSuccess(true), 1000);
    }
>>>>>>> d979530 (implemented persisted state with local storage)
  };

  const closePopup = () => setSuccess(false);

  return (
    <div className="sign-up-container">
<<<<<<< HEAD
      <Form config={config} onSubmit={register} buttonTitle="Register now" />
=======
      <form className="sign-up-form" onSubmit={() => {}}>
        {config.map((item: ConfigItem) => (
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
          title="Send"
          onAction={makeFakeRequest}
          buttonType={ButtonTypes.button}
        />
      </form>
>>>>>>> d979530 (implemented persisted state with local storage)
      {success && (
        <div className="sign-up-popup">
          <h3>Congrat Champ !! you did it</h3>
          <Button
            buttonType={ButtonTypes.button}
<<<<<<< HEAD
            onClick={closePopup}
=======
            onAction={closePopup}
>>>>>>> d979530 (implemented persisted state with local storage)
            title="close me"
          />
        </div>
      )}
    </div>
  );
};

export default SignUp;
