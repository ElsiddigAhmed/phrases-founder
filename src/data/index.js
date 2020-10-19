import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reduces } from "./reduces";

const persistConfig = {
  key: "Phrases",
  storage: storage,
  whitelist: ["Phrases"], // which reducer want to store
};
const PR = persistReducer(persistConfig, reduces);

const middleware = [thunk];

const store = createStore(PR, compose(applyMiddleware(...middleware)));
const persister = persistStore(store);

export { persister, store };
