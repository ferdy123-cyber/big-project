const initialState = {
  data: [],
  detailProduct: [],
  newProduct: {},
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
    alert("Succes add product");
    console.log(action.value);
  }
  return state;
};

export default productReducer;
