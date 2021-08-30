import React from "react";

import "./app.scss";

import Router from "./router";
import Navigation from "./components/Navigation";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <Navigation />
      <Router />
    </div>
  );
};

export default App;
