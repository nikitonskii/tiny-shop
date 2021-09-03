import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavLinks } from "../../types/navLinks";

import { authStateSelector } from "../../store/reducers/authReducer/selectors";

const Navigation: React.FC = (): JSX.Element => {
  const { token } = useSelector(authStateSelector);

  return (
    <nav className="navigation-container">
      <ul className="navigation-link-container">
        {token ? (
          <>
            <li>
              <Link className="navigation-link" to={NavLinks.default}>
                Home
              </Link>
            </li>
            <li>
              <Link className="navigation-link" to={NavLinks.products}>
                Products
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="navigation-link" to={NavLinks.default}>
                Home
              </Link>
            </li>
            <li>
              <Link className="navigation-link" to={NavLinks.signIn}>
                Login
              </Link>
            </li>
            <li>
              <Link className="navigation-link" to={NavLinks.signUp}>
                Registration
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
