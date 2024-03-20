import React from "react";
import ProductItem from "./ProductItem";
import { useProduct } from "../../context/ProductsContext";

const Products = ({products}) => {
  // const { products } = useProduct();
  // console.log(products);

  return (
    <div className="">
      <div className="flex justify-center items-center flex-col w-full">
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-2 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {products &&
            products.map((item) => (
              <ProductItem key={item.id} productItem={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
