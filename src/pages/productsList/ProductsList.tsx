import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masonry from "react-masonry-component";

import ProductCard from "../../components/ProductCard";

import { getProducts } from "../../store/actions/productsActions/getProducts";
import { productsStateSelector } from "../../store/reducers/productsReducer/selectors";

import { ProductItem } from "../../types/products";

const ProductsList: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isLoaded, results } = useSelector(productsStateSelector);

  // products request
  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  return (
    <div className="products-list-container">
      <Masonry className="products-list-gallery">
        {isLoaded ? (
          results?.map((product: ProductItem, index: number) => {
            if (index % 2 === 0) {
              return (
                <div className="product-list-wrapper" key={product.created}>
                  <ProductCard
                    name={product.name}
                    model={product.model}
                    cost_in_credits={product.cost_in_credits}
                    vehicle_class={product.vehicle_class}
                    created={product.created}
                  />
                </div>
              );
            } else {
              return (
                <div className="product-list-wrapper" key={product.created}>
                  <ProductCard {...product} cargo_capacity={product.cargo_capacity} />
                </div>
              );
            }
          })
        ) : (
          <h2>Loading .....</h2>
        )}
      </Masonry>
    </div>
  );
};

export default ProductsList;
