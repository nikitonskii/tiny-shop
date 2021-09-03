import * as actionTypes from "../../actionTypes/productsActionTypes";
import * as productsInterfaces from "../../types/productsInterfaces";
import { ProductsStateType } from "../../types/statesInterfaces";

import { initialState } from "./initialState";

export const productsReducer = (
  state: ProductsStateType = initialState,
  action:
    | productsInterfaces.ProductsRequestType
    | productsInterfaces.ProductsSuccesType
    | productsInterfaces.ProductsFailType,
): ProductsStateType => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_PENDING:
      return {
        ...state,
        isLoaded: false,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        count: action.count,
        next: action.next,
        previous: action.previous,
        results: action.results,
        isLoaded: true,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.error,
        isLoaded: true,
      };
    default:
      return state;
  }
};
