import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: false,
  reducers: {
    setLoading(state, action) {
      return action.payload;
    },
  },
});

export const { setLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
