import React from "react";

import { ProductCardProps } from "./types";

import logo from "../../assets/images/logo.svg";

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  model,
  cost_in_credits,
  vehicle_class,
  cargo_capacity,
  created,
}): JSX.Element => {
  return (
    <div className="product-card-container" key={created}>
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
    </div>
  );
};

export default ProductCard;
