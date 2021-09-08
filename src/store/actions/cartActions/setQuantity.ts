import * as actionTypes from "../../actionTypes/cartActionTypes";
import * as cartInterfaces from "../../types/cartInterfaces";

// cart items managment actions
export const cartItems = {
  plusOneProduct: (created: string): cartInterfaces.CartPlusProductType => ({
    type: actionTypes.PLUS_PRODUCT_IN_CART,
    created,
  }),

  minusOneProduct: (created: string): cartInterfaces.CartMinusProductType => ({
    type: actionTypes.MINUS_PRODUCT_IN_CART,
    created,
  }),
};
