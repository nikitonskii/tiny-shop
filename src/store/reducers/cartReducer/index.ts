import { ProductItem } from "../../../types/products";
import * as actionTypes from "../../actionTypes/cartActionTypes";
import * as cartInterfaces from "../../types/cartInterfaces";
import { CartStateType } from "../../types/statesInterfaces";

import { initialState } from "./initialState";

export const cartReducer = (
  state: CartStateType = initialState,
  action:
    | cartInterfaces.CartAddActionType
    | cartInterfaces.CartRemoveActionType,
): CartStateType => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        addedProducts: [...state.addedProducts, action.product],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        addedProducts: state.addedProducts.filter(
          (item: ProductItem) => item.created !== action.created,
        ),
      };
    default:
      return state;
  }
};
