import { Dispatch } from "react";

import * as actionTypes from "../../actionTypes/productsActionTypes";
import * as productsInterfaces from "../../types/productsInterfaces";

import { getProductsRequest } from "../../../api/productsApi";

export const productsActions = {
  setProductsSucces: ({
    count,
    next,
    previous,
    results,
  }: productsInterfaces.ProductsSuccesType): productsInterfaces.ProductsSuccesType => ({
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    count,
    next,
    previous,
    results,
    isLoaded: true,
  }),

  setProductsFail: (
    error: string | Error,
  ): productsInterfaces.ProductsFailType => ({
    type: actionTypes.GET_PRODUCTS_FAIL,
    error,
    isLoaded: true,
  }),

  setProductsPending: (): productsInterfaces.ProductsRequestType => ({
    type: actionTypes.GET_PRODUCTS_PENDING,
    isLoaded: false,
  }),

  getProducts: (page: number) => {
    return (
      dispatch: Dispatch<
        | productsInterfaces.ProductsSuccesType
        | productsInterfaces.ProductsFailType
        | productsInterfaces.ProductsRequestType
      >,
    ) => {
      dispatch(productsActions.setProductsPending());

      getProductsRequest(page)
        .then((result) =>
          dispatch(productsActions.setProductsSucces(result.data)),
        )
        .catch((error) =>
          dispatch(productsActions.setProductsFail(error.message)),
        );
    };
  },
};
