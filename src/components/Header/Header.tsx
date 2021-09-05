import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import Navigation from "../Navigation";

import { logoutActions } from "../../store/actions/authActions/logout";
import { authStateSelector } from "../../store/reducers/authReducer/selectors";

import { NavLinks } from "../../types/navLinks";

const Header: React.FC = (): JSX.Element => {
  const dispatch: any = useDispatch();
  const { token } = useSelector(authStateSelector);
  const history = useHistory();

  const logOut = () => {
    dispatch(logoutActions.logout())
      .then((res: any) => history.push(NavLinks.default))
      .catch((e: any) => console.log(e));
  };

  return (
    <header className="header-container">
      <Navigation />
      {token && (
        <>
          <button className="header-icon-button" onClick={logOut}>
            <i className="fas fa-sign-out-alt header-icon"></i>
          </button>
          <button className="header-icon-button">
            <i className="fas fa-shopping-cart header-icon"></i>
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
