import React, { createContext, useContext, useEffect, useReducer } from "react";
import productReducer from "./productReducer";
import * as types from "./contextTypes";

const ProductContext = createContext(null);

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  singleProduct:null
};

const ProductProvider = ({ children }) => {
  // to set data we are using reducer
  const [prodState, dispatch] = useReducer(productReducer, initialState);

  // console.log(dispatch);
  const baseurl="http://makeup-api.herokuapp.com/api/v1/products.json"
  
  let url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush";

  const getProducts = async () => {
    try {
      dispatch({ type: types.SET_LOADING });
      const response = await fetch(baseurl);
      const data = await response.json();
      // console.log(data);
      dispatch({ type: types.GET_PRODUCTS, payload: data });
    } catch (error) {
      console.log(error);
      // dispatch({ type: types.IS_ERROR });
    }
  };

  const getSingleProduct = async (id) => {
    try {
      const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}`);
      const singleProduct = await res.json();
      console.log(singleProduct);
      dispatch({ type: types.SINGLE_PRODUCT, payload: singleProduct });
    } catch (error) {
      console.log(error);
      // dispatch({ type: types.IS_ERROR });
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...prodState, dispatch, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
export default ProductProvider;
