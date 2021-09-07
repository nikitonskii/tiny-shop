import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masonry from "react-masonry-component";

import ProductCard from "../../components/ProductCard";

import { productsActions } from "../../store/actions/productsActions/getProducts";
import { productsStateSelector } from "../../store/reducers/productsReducer/selectors";

import { ProductItem } from "../../types/products";

const ProductsList: React.FC = (): JSX.Element => {
  const dispatch: any = useDispatch();
  const { isLoaded, results, error } = useSelector(productsStateSelector);

  // products request
  useEffect(() => {
    dispatch(productsActions.getProducts(1));
  }, []);

  return (
    <div className="products-list-container">
      {isLoaded && !error ? (
        <Masonry className="products-list-gallery" elementType="ul">
          {results?.map((product: ProductItem, index: number) =>
            index % 2 === 0 ? (
              <li className="product-list-wrapper" key={product.created}>
                <ProductCard {...product} cargo_capacity="" />
              </li>
            ) : (
              <li className="product-list-wrapper" key={product.created}>
                <ProductCard {...product} />
              </li>
            ),
          )}
        </Masonry>
      ) : (
        <h2>Loading .....</h2>
      )}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default ProductsList;
