import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masonry from "react-masonry-component";

import ProductCard from "../../components/ProductCard";

import { productsActions } from "../../store/actions/productsActions/getProducts";
import { productsStateSelector } from "../../store/reducers/productsReducer/selectors";
import { cartStateSelector } from "../../store/reducers/cartReducer/selectors";

import { ProductItem } from "../../types/products";
import { CartProduct } from "../../types/cartProduct";

const ProductsList: React.FC = (): JSX.Element => {
  const dispatch: any = useDispatch();
  const { isLoaded, results, error } = useSelector(productsStateSelector);
  const { addedProducts } = useSelector(cartStateSelector);

  // products request
  useEffect(() => {
    dispatch(productsActions.getProducts(1));
  }, []);

  const isProductAdded = (created: string): boolean => {
    return addedProducts.some((product: CartProduct) => product.created === created);
  };

  return (
    <div className="products-list-container">
      {isLoaded && !error ? (
        <Masonry className="products-list-gallery" elementType="ul">
          {results?.map((product: ProductItem, index: number) => (
            <li className="product-list-wrapper" key={product.created}>
              <ProductCard
                {...product}
                cargo_capacity={index % 2 === 0 ? product.cargo_capacity : ""}
                isDisabled={isProductAdded(product.created)}
              />
            </li>
          ))}
        </Masonry>
      ) : (
        <h2>Loading .....</h2>
      )}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default ProductsList;
