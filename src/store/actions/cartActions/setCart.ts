import * as actionTypes from "../../actionTypes/cartActionTypes";
import * as cartInterfaces from "../../types/cartInterfaces";

import { CartProduct } from "../../../types/cartProduct";

// cart managment actions
export const cartActions = {
  addToCart: (product: CartProduct): cartInterfaces.CartAddActionType => ({
    type: actionTypes.ADD_TO_CART,
    product,
  }),

  removeFromCart: (
    created: string | number,
  ): cartInterfaces.CartRemoveActionType => ({
    type: actionTypes.REMOVE_FROM_CART,
    created,
  }),
};
