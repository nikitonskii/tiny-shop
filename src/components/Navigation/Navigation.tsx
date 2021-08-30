import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = (): JSX.Element => {
  return (
    <div className="navigation-container">
      <ul className="navigation-link-container">
        <li>
          <Link className="navigation-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navigation-link" to="/sign-in">
            Login
          </Link>
        </li>
        <li>
          <Link className="navigation-link" to="/sign-up">
            Registration
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
