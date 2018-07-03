import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import totalPriceReducer from "./totalPriceReducer";

const rootReducer = combineReducers({
  items: cartReducer,
  price: totalPriceReducer
});

export default rootReducer;
