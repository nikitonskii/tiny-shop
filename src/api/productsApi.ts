import axios, { AxiosResponse } from "axios";

const rootPath = `https://swapi.dev/api/`;

export const getProductsRequest = (page: number): Promise<AxiosResponse> => {
  return axios.get(`${rootPath}/vehicles/?page=${page}`);
};
