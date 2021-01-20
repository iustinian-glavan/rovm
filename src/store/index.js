import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import product from "./product";
import credit from "./credit";

const reducer = combineReducers({
  product,
  credit,
});

const store = configureStore({
  reducer,
});

export default store;
