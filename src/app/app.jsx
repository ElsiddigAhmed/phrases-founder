import React from "react";
import { Provider } from "react-redux";
import Home from "../components/app";
import { store, persister } from "../data";
import { PersistGate } from "redux-persist/integration/react";

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <Home />
      </PersistGate>
    </Provider>
  );
}
