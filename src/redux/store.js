import { applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
//import logger from "redux-logger";
//import { persistStore } from "redux-persist";
import { legacy_createStore as createStore } from "redux";

const middleware = [];

// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

export const store = createStore(rootReducer, applyMiddleware(...middleware));

//export const persistor = persistStore(store);