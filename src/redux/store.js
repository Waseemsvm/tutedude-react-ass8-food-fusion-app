import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import loaderReducer from "./loaderSlice";
import cartReducer from "./CartSlice";

import { thunk } from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";

const store = configureStore(
  {
    reducer: {
      menu: menuReducer,
      loader: loaderReducer,
      cart: cartReducer,
    },
  },
  [],
  applyMiddleware(thunk)
);

export default store;
