import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/actions/cartActions/setCart";
import { cartItems } from "../../store/actions/cartActions/setQuantity";
import { CartProduct } from "../../types/cartProduct";

const CartItem: React.FC<CartProduct> = ({
  name,
  model,
  cost_in_credits,
  created,
  quantity,
}): JSX.Element => {
  const dispatch = useDispatch();

  const deleteProduct = (created: string) =>
    dispatch(cartActions.removeFromCart(created));

  const plusOneProduct = (created: string) =>
    dispatch(cartItems.plusOneProduct(created));

  const minusProduct = (created: string) =>
    dispatch(cartItems.minusOneProduct(created));

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
      <button onClick={() => plusOneProduct(created)}>One more</button>
      {quantity}
      <button onClick={() => minusProduct(created)}>Delete</button>
    </div>
  );
};

export default CartItem;
