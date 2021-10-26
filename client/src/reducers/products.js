import axios from "axios";

// ACTIONS -  ACTIONS SHOULD REALLY GO IN ITS OWN FILE

// REMBER OUR THUNK THAT WE SETUP
export const getProducts = () => {
  // this is part of the redux-thunk lib
  return (dispatch) => {
    axios.get("/api/products").then((res) => {
      dispatch({ type: "PRODUCTS", products: res.data });
    });
  };
};

// REDUCER - just takes state and and action and return new state
const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS":
      return action.products;
    default:
      return state;
  }
};
export default products;
