import React, { createContext, useContext, useEffect, useReducer } from "react";
import productReducer from "./productReducer";
import * as types from "./contextTypes";

const ProductContext = createContext(null);

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
};

const ProductProvider = ({ children }) => {
  // to set data we are using reducer
  const { prodState, dispatch } = useReducer(productReducer, initialState);
  // console.log(dispatch);
  let url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush";
  const getProducts = async () => {
    dispatch({ type: types.SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({ type: types.GET_PRODUCTS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: types.IS_ERROR });
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...prodState, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
export default ProductProvider;
