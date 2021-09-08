import * as actionTypes from "../../actionTypes/cartActionTypes";
import * as cartInterfaces from "../../types/cartInterfaces";

import { CartStateType } from "../../types/statesInterfaces";
import { CartProduct } from "../../../types/cartProduct";

import { initialState } from "./initialState";

export const cartReducer = (
  state: CartStateType = initialState,
  action:
    | cartInterfaces.CartAddActionType
    | cartInterfaces.CartRemoveActionType
    | cartInterfaces.CartPlusProductType
    | cartInterfaces.CartMinusProductType,
): CartStateType => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const cartList = [...state.addedProducts, action.product];
      return {
        ...state,
        addedProducts: cartList,
      };
    case actionTypes.REMOVE_FROM_CART:
      const filteredCartList = state.addedProducts.filter(
        (item: CartProduct) => item.created !== action.created,
      );
      return {
        ...state,
        addedProducts: filteredCartList,
      };
    case actionTypes.PLUS_PRODUCT_IN_CART:
      const increasedQuantity = state.addedProducts.map((item: any) =>
        item.created === action.created ? { ...item, quantity: item.quantity + 1 } : { ...item },
      );
      return {
        ...state,
        addedProducts: increasedQuantity,
      };
    case actionTypes.MINUS_PRODUCT_IN_CART:
      const decreasedQuantity = state.addedProducts.map((item: CartProduct) =>
        item.created === action.created && item.quantity !== 1
          ? { ...item, quantity: item.quantity - 1 }
          : { ...item },
      );
      return {
        ...state,
        addedProducts: decreasedQuantity,
      };
    default:
      return state;
  }
};
