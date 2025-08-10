import { createSlice } from "@reduxjs/toolkit";

import { setLoading } from "./loaderSlice";
import axios from "axios";

const menuSlice = createSlice({
  name: "menu",
  initialState: [],
  reducers: {
    setItems: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

// Thunk function
export function fetchItems() {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));
      // let items = (await import("../data/food_fusion.json")).default;
      let response = await axios.get(
        "https://faux-api.com/serve/items_140533165"
      );
      const items = response.data.result;
      dispatch(setItems(items));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
    }
  };
}

export function filterItems(val) {
  const params = new URLSearchParams({
    description: val,
    name: val,
    globalSearch: "active",
    searchMode: "OR",
  });
  const query = params.toString();

  return async function (dispatch) {
    try {
      dispatch(setLoading(true));
      // let items = (await import("../data/food_fusion.json")).default;
      let response = await axios.get(
        "https://faux-api.com/serve/items_140533165?" + query
      );
      const items = response.data.result;
      dispatch(setItems(items));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
    }
  };
}

export const { setItems } = menuSlice.actions;

export default menuSlice.reducer;
