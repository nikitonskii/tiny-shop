import React from "react";
import { useSelector } from "react-redux";

import { config } from "./config";
import { LoginProps } from "./types";

import Form from "../../components/Form";

import { RootState } from "../../store/reducers";

const SignIn: React.FC = (): JSX.Element => {
  const { email: storedEmail, password: storedPassword } = useSelector(
    (state: RootState) => state.auth,
  );

  const login = ({ email, password }: LoginProps) => {
    if (storedEmail === email && storedPassword === password) {
      setTimeout(() => {
        console.log("you are logged !");
      }, 1000);
    } else {
      console.log("Goodbye America !");
    }
  };

  return (
    <div className="sign-in-container">
      <Form config={config} onSubmit={login} buttonTitle="Log in" />
    </div>
  );
};

export default SignIn;
