import { ProductsStateType } from "../../types/statesInterfaces";

export const initialState: ProductsStateType = {
  count: null,
  next: null,
  previous: null,
  results: null,
  error: null,
  isLoaded: false,
};
