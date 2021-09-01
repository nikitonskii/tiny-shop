import axios from "axios";

import { ProductItem } from "../types/products";

const rootPath = `https://swapi.dev/api/`;

export const getProductsRequest = (page: number): Promise<ProductItem> => {
  return axios.get(`${rootPath}/vehicles/?page=${page}`);
};
