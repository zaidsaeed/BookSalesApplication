import initialState from "./initialState";
import {
  INCREASE_TOTAL_COUNT,
  DECREASE_TOTAL_COUNT
} from "../actions/actionTypes";

export default function totalPriceReducer(state = initialState.price, action) {
  let newState = 0;
  switch (action.type) {
    case INCREASE_TOTAL_COUNT:
      newState = state + action.price;
      return newState;
    case DECREASE_TOTAL_COUNT:
      if (state !== 0) {
        newState = state - action.price;
      }
      return newState;
    default:
      return state;
  }
}
