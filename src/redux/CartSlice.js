import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (!item) state.items.push({ ...action.payload, quantity: 1 });
      else item.quantity++;
      return state;
    },
    removeItem: (state, action) => {
      const idx = state.items.findIndex((i) => i.id === action.payload.id);
      const item = state.items[idx];
      if (item.quantity > 1) item.quantity--;
      else state.items.splice(idx, 1);
    },
    removeAllItems: (state) => {
      state.items = [];
      return state;
    },
  },
});

export const { addItem, removeItem, removeAllItems } = cartSlice.actions;

export default cartSlice.reducer;
