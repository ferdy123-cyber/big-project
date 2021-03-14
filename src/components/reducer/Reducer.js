import { Redirect } from "react-router";

const initialState = {
  data: [],
  detailProduct: [],
  newProduct: {
    id: "",
    name: "",
    description: "",
    stock: 0,
    price: 0,
    discount: 0,
    sex: "",
    color: "",
  },
};

const productReducer = (state = initialState, action) => {
  if (action.type === "DETAIL_PRODUCT") {
    return {
      ...state,
      detailProduct: action.value,
    };
  }
  if (action.type === "GET_PRODUCT") {
    return {
      ...state,
      data: action.value,
    };
  }
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      newProduct: action.value,
    };
  }
  if (action.type === "UPDATE_PRODUCT") {
    alert("Succes update product");
  }
  if (action.type === "DELETE") {
    alert("Succes delete product");
  }
  return state;
};

export default productReducer;
