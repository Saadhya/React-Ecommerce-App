import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-2 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <ProductItem key={i} />
      ))}
    </div>
  );
};

export default Products;
