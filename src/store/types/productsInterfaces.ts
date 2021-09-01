import * as actionTypes from "../actionTypes/productsActionTypes";
import { ProductItem } from "../../types/products";

export interface ProductsRequestType {
  type: typeof actionTypes.GET_PRODUCTS_REQUEST;
}

export interface ProductsSuccesType {
  type: typeof actionTypes.GET_PRODUCTS_SUCCESS;
  count: number;
  next: string;
  previous: string;
  results: ProductItem[];
  isLoaded: boolean;
}

export interface ProductsFailType {
  type: typeof actionTypes.GET_PRODUCTS_FAIL;
  error: string | Error;
  isLoaded: boolean;
}
