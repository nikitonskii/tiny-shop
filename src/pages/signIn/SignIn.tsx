import React from "react";
import { useSelector } from "react-redux";

import { config } from "./config";

import Form from "../../components/Form";

import { RootState } from "../../store/reducers";

const SignIn: React.FC = (): JSX.Element => {
  const { email, password } = useSelector((state: RootState) => state.auth);

  const login = (formEmail: string, formPassword: string) => {
    if (email === formEmail && password === formPassword) {
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
