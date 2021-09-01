import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import Navigation from "../Navigation";

import { logout } from "../../store/actions/authActions/logout";
import { authStateSelector } from "../../store/reducers/authReducer/selectors";

import { NavLinks } from "../../types/navLinks";

const Header: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { token } = useSelector(authStateSelector);
  const history = useHistory();

  const logOut = () => {
    dispatch(logout());
    history.push(NavLinks.default);
  };

  return (
    <div className="header-container">
      <Navigation />
      {token && (
        <>
          <span className="header-icon-wrapper" onClick={logOut}>
            <i className="fas fa-sign-out-alt header-icon"></i>
          </span>
          <span className="header-icon-wrapper">
            <i className="fas fa-shopping-cart header-icon"></i>
          </span>
        </>
      )}
    </div>
  );
};

export default Header;
