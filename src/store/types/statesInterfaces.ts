import { CartProduct } from "../../types/cartProduct";
import { ProductItem } from "../../types/products";

// AUTH
export interface AuthStateType {
  token?: string | null | boolean;
  isLoaded?: boolean;
  error?: string | Error | null;
  userName: string | null;
  password: string | null;
  email: string | null;
}

// PRODUCTS
export interface ProductsStateType {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: ProductItem[] | null;
  error?: string | Error | null;
  isLoaded: boolean;
}

// CART
export interface CartStateType {
  addedProducts: CartProduct[];
}
