import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import Home from "../pages/home";
import NotFound from "../pages/notFound";

const Router: React.FC = (): JSX.Element => {
  return (
    <div className="router-container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default Router;
