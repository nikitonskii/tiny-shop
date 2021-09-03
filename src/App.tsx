import React from "react";

import "./app.scss";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Router from "./router";

const App: React.FC = (): JSX.Element => (
  <div className="app">
    <Header />
    <Router />
    <Footer />
  </div>
);

export default App;
