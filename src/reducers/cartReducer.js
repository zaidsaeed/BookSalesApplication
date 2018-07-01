import initialState from "./initialState";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

export default function cart(state = initialState.items, action) {
  let newState;
  switch (action.type) {
    case ADD_TO_CART:
      newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    case REMOVE_FROM_CART:
      newState = state.filter(item => {
        if (item.id != action.id) {
          return item;
        }
      });
      return newState;
    default:
      return state;
  }
}
