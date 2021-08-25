import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import { ButtonTypes } from "../../components/Button/types";
import Form from "../../components/Form";

import { config } from "./config";
import { RegisterProp } from "./types";

import * as action from "../../store/actions/authActions/registrate";

const SignUp: React.FC = (): JSX.Element => {
  const [success, setSuccess] = useState<boolean>(false);
  const dispatch = useDispatch();

  const register = ({ email, password, firstName }: RegisterProp) => {
    dispatch(action.registration(email, password, firstName));
    setTimeout(() => setSuccess(true), 1000);
  };

  const closePopup = () => setSuccess(false);

  return (
    <div className="sign-up-container">
      <Form config={config} onSubmit={register} buttonTitle="Register now" />
      {success && (
        <div className="sign-up-popup">
          <h3>Congrat Champ !! you did it</h3>
          <Button
            buttonType={ButtonTypes.button}
            onClick={closePopup}
            title="close me"
          />
        </div>
      )}
    </div>
  );
};

export default SignUp;
