import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Filipe",
      category: "Front End Developer"
    }
  ]
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case type === ActionTypes.SET_PRODUCT:
      return { ...state, products: [...state.products, payload] };
    default:
      return state;
  }
};
