import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../Button";

import { ButtonTypes } from "../Button/types";
import { ProductItem } from "../../types/products";
import { CartProduct } from "../../types/cartProduct";

import logo from "../../assets/images/logo.svg";

import { cartActions } from "../../store/actions/cartActions/setCart";

const ProductCard: React.FC<ProductItem> = ({
  name,
  model,
  cost_in_credits,
  vehicle_class,
  cargo_capacity,
  created,
  isDisabled,
}): JSX.Element => {
  const [productInfo, setProductInfo] = useState<CartProduct>({
    name,
    model,
    cost_in_credits,
    vehicle_class,
    cargo_capacity,
    created,
    quantity: 1,
  });

  const dispatch = useDispatch();

  const addCart = () => dispatch(cartActions.addToCart(productInfo));

  return (
    <div className="product-card-container" key={`${created} + ${name}`}>
      <h4 className="product-card-title">{name}</h4>
      <div className="product-card-image-wrapper">
        <img src={logo} alt="react" className="product-card-image card-logo" />
      </div>
      <div>
        <p className="product-card-text">
          <b>Model : </b>
          {model}
        </p>
      </div>
      <p className="product-card-text">
        <b>Vehicle class : </b>
        {vehicle_class}
      </p>
      <p className="product-card-text">
        <b>Price : </b>
        {cost_in_credits}
      </p>
      {cargo_capacity && (
        <p className="product-card-text">
          <b>Cargo Capacity : </b>
          {cargo_capacity}
        </p>
      )}
      <Button
        title="Add to cart"
        buttonType={ButtonTypes.button}
        isDisabled={isDisabled}
        onClick={addCart}
      ></Button>
    </div>
  );
};

export default ProductCard;
