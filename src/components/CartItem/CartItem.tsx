import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/actions/cartActions/setCart";

import { ProductItem } from "../../types/products";

const CartItem: React.FC<ProductItem> = ({
  name,
  model,
  cost_in_credits,
  created,
}): JSX.Element => {
  const dispatch = useDispatch();

  const deleteProduct = (created: string) =>
    dispatch(cartActions.removeFromCart(created));

  return (
    <div className="cart-item-container">
      <h3>You have ordered :{name}</h3>
      <p>
        <b>Model :</b> {model}
      </p>
      <p>
        <b>Price :</b>
        {cost_in_credits}
      </p>
      <button onClick={() => deleteProduct(created)}>Delete from cart</button>
    </div>
  );
};

export default CartItem;
