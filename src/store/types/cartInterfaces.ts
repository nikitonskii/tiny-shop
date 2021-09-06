import * as actionTypes from "../actionTypes/cartActionTypes";

import { ProductItem } from "../../types/products";

export interface CartAddActionType {
  type: typeof actionTypes.ADD_TO_CART;
  product: ProductItem;
}

export interface CartRemoveActionType {
  type: typeof actionTypes.REMOVE_FROM_CART;
  created: string | number;
}
