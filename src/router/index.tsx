import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

const Router: React.FC = (): JSX.Element => {
  return (
    <div style={{ width: "100%" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Login</Link>
        </li>
        <li>
          <Link to="/signup">Registration</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default Router;

function Home() {
  return (
    <div>
      <h2>Here we go again </h2>
    </div>
  );
}
