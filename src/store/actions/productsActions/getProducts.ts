import * as actionTypes from "../../actionTypes/productsActionTypes";
import * as productsInterfaces from "../../types/productsInterfaces";

import { getProductsRequest } from "../../../api/productsApi";
import { Dispatch } from "react";

// get products
const setProductsSucces = ({
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
});

const setProductsFail = (error: string | Error): productsInterfaces.ProductsFailType => ({
  type: actionTypes.GET_PRODUCTS_FAIL,
  error,
  isLoaded: false,
});

export const getProducts = (page: number) => {
  return (
    dispatch: Dispatch<productsInterfaces.ProductsSuccesType | productsInterfaces.ProductsFailType>,
  ) => {
    getProductsRequest(page)
      .then((result) => dispatch(setProductsSucces(result.data)))
      .catch((error) => dispatch(setProductsFail(error)));
  };
};
