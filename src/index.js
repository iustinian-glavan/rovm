import React from "react";
import ReactDOM from "react-dom";
import VendingMachine from "./VendingMachine";
import { Provider } from "react-redux";
import store from "./store";

import "semantic-ui-css/semantic.min.css";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <VendingMachine />
  </Provider>,
  mountNode
);
