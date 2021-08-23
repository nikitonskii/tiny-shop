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
