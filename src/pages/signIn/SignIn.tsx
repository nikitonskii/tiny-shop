import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { config } from "./config";
import { LoginProps } from "./types";
import { NavLinks } from "../../types/navLinks";

import Form from "../../components/Form";

import { authStateSelector } from "../../store/reducers/authReducer/selectors";
import { signIn } from "../../store/actions/authActions/login";

const SignIn: React.FC = (): JSX.Element => {
  const { email: storedEmail, password: storedPassword } = useSelector(authStateSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (email: string, password: string) => {
    if (storedEmail === email && storedPassword === password) {
      dispatch(signIn());
      history.push(NavLinks.default);
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
