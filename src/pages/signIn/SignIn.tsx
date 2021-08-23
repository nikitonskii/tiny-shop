import React from "react";

import { config } from "./config";

import Form from "../../components/Form";

const SignIn: React.FC = (): JSX.Element => {
  const login = () => {
    setTimeout(() => {
      console.log("you are logged !");
    }, 1000);
  };

  return (
    <div className="sign-in-container">
      <Form config={config} onSubmit={login} buttonTitle="Log in" />
    </div>
  );
};

export default SignIn;
