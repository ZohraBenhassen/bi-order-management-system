import { combineReducers } from "redux";
import cartReducer from "./reducer";
//import { persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  cartReducer
})

export default rootReducer