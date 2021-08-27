import React from "react";
import { useSelector } from "react-redux";

import { config } from "./config";
import { LoginProps } from "./types";

import Form from "../../components/Form";

import { authStateSelector } from "../../store/reducers/authReducer/selectors";

const SignIn: React.FC = (): JSX.Element => {
  const { email: storedEmail, password: storedPassword } = useSelector(authStateSelector);

  const login = (email: string, password: string) => {
    if (storedEmail === email && storedPassword === password) {
      setTimeout(() => console.log("you are logged !"), 1000);
    } else {
      console.log("Goodbye America !");
    }
  };

  const getLoginFields = ({ email, password }: LoginProps) => {
    return login(email, password);
  };

  return (
    <div className="sign-in-container">
      <Form config={config} onSubmit={getLoginFields} buttonTitle="Log in" />
    </div>
  );
};

export default SignIn;
