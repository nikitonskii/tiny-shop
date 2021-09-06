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
          {results?.map((product: ProductItem, index: number) => {
            if (index % 2 === 0) {
              return (
                <li className="product-list-wrapper" key={product.created}>
                  <ProductCard
                    name={product.name}
                    model={product.model}
                    cost_in_credits={product.cost_in_credits}
                    vehicle_class={product.vehicle_class}
                    created={product.created}
                  />
                </li>
              );
            } else {
              return (
                <li className="product-list-wrapper" key={product.created}>
                  <ProductCard
                    name={product.name}
                    model={product.model}
                    cost_in_credits={product.cost_in_credits}
                    vehicle_class={product.vehicle_class}
                    created={product.created}
                    cargo_capacity={product.cargo_capacity}
                  />
                </li>
              );
            }
          })}
        </Masonry>
      ) : (
        <h2>Loading .....</h2>
      )}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default ProductsList;
