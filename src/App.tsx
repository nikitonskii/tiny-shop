import React from "react";

import logo from "./logo.svg";
import "./app.scss";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo" />
      <SignIn />
      <SignUp />
    </div>
  );
};

export default App;
