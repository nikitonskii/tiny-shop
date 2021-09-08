import * as actionTypes from "../actionTypes/cartActionTypes";

import { CartProduct } from "../../types/cartProduct";

export interface CartAddActionType {
  type: typeof actionTypes.ADD_TO_CART;
  product: CartProduct;
}

export interface CartRemoveActionType {
  type: typeof actionTypes.REMOVE_FROM_CART;
  created: string | number;
}

export interface CartPlusProductType {
  type: typeof actionTypes.PLUS_PRODUCT_IN_CART;
  created: string;
}

export interface CartMinusProductType {
  type: typeof actionTypes.MINUS_PRODUCT_IN_CART;
  created: string;
}
