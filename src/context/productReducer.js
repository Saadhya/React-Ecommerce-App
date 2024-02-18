import * as types from "./contextTypes";
const productReducer = (state, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };

    case types.IS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default productReducer;
