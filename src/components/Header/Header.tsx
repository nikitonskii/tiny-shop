import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import Navigation from "../Navigation";

import { logoutActions } from "../../store/actions/authActions/logout";
import { authStateSelector } from "../../store/reducers/authReducer/selectors";
import { cartStateSelector } from "../../store/reducers/cartReducer/selectors";

import { NavLinks } from "../../types/navLinks";

const Header: React.FC = (): JSX.Element => {
  const dispatch: any = useDispatch();
  const { token } = useSelector(authStateSelector);
  const { addedProducts } = useSelector(cartStateSelector);
  const history = useHistory();
  const amountCartProducts = addedProducts.length;

  const logOut = () => {
    dispatch(logoutActions.logout())
      .then((res: any) => history.push(NavLinks.default))
      .catch((e: Error | string) => console.log(e));
  };

  const moveToCart = () => history.push(NavLinks.cart);

  return (
    <header className="header-container">
      <Navigation />
      {token && (
        <>
          <button className="header-icon-button" onClick={logOut}>
            <i className="fas fa-sign-out-alt header-icon"></i>
          </button>
          <button className="header-icon-button" onClick={moveToCart}>
            <i className="fas fa-shopping-cart header-icon"></i>
            {amountCartProducts ? (
              <div className="header-cart-badge">
                <p className="header-cart-badge-value">{amountCartProducts}</p>
              </div>
            ) : null}
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
