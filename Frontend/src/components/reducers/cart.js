// reducers/cart.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    emptyCart: (state) => {
      state = [];
    },
  },
});

export const { addToCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
