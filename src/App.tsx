import React from "react";

import logo from "./logo.svg";
import "./app.scss";

import Router from "./router";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo" />
      <Router />
    </div>
  );
};

export default App;
