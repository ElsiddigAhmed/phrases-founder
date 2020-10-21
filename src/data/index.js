import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reduces } from "./reduces";

const persistConfig = {
  key: "NON",
  storage: storage,
  whitelist: ["NON"], // which reducer want to store
};
const PR = persistReducer(persistConfig, reduces);

const middleware = [thunk];

const store = createStore(PR, compose(applyMiddleware(...middleware)));
const persister = persistStore(store);

export { persister, store };
