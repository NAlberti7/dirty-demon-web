import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import cartReducer from "./cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["cart", "general"],
};

const generalConfig = {
  key: "general",
  storage: storage,
  whitelist: ["cartItems", "totalPrice", "itemList"],
};

const rootReducer = combineReducers({
  general: persistReducer(generalConfig, generalReducer),
  cart: cartReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
