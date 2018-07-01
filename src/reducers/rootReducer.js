import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  items: cartReducer
});

export default rootReducer;
