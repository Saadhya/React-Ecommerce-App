import React, { createContext, useContext, useEffect, useReducer } from "react";

const ProductContext = createContext(null);
const prodReducer = () => {};

const initialState = {
  products: [],
};

const ProductProvider = ({ children }) => {
  const { prodState, dispatch } = useReducer(prodReducer, initialState);

  let url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush"
  const getProducts = ()=>{

  }
  useEffect(() => {
    getProducts()
  
    // return () => {
    //   second
    // }
  }, [prodState.products])
  
  return (
    <ProductContext.Provider value={{ ...prodState }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
export default ProductProvider;
