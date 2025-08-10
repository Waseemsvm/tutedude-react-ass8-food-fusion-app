import { createSlice } from "@reduxjs/toolkit";

import { setLoading } from "./loaderSlice";

const menuSlice = createSlice({
  name: "menu",
  initialState: [],
  reducers: {
    setItems: (state, action) => {
      state = action.payload;
      return state;
    }
  },
});

// Thunk function
export function fetchItems() {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));
      let items = (await import("../data/food_fusion.json")).default;
      dispatch(setItems(items));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
    }
  };
}

export const { setItems } = menuSlice.actions;

export default menuSlice.reducer;
