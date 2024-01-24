import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./MainApp";
import "./main.scss";

import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp />
    </Provider>
  </React.StrictMode>,
);
