import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import ProductsList from "./pages/productsList";

import { NavLinks } from "./types/navLinks";
import Cart from "./pages/cart";

const Router: React.FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path={NavLinks.default}>
          <Home />
        </Route>
        <Route path={NavLinks.signIn}>
          <SignIn />
        </Route>
        <Route path={NavLinks.signUp}>
          <SignUp />
        </Route>
        <Route path={NavLinks.products}>
          <ProductsList />
        </Route>
        <Route path={NavLinks.cart}>
          <Cart />
        </Route>
        <Route path={NavLinks.notFound}>
          <NotFound />
        </Route>
        <Redirect to={NavLinks.notFound} />
      </Switch>
    </>
  );
};

export default Router;
