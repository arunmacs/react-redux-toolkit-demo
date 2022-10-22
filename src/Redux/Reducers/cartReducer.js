import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      const priceArray = state.cartItems.map((item) => item.price);
      state.totalPrice = priceArray.reduce((total, curr) => total + curr);
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );
      if (index > -1) state.cartItems.splice(index, 1);

      const priceArray = state.cartItems.map((item) => item.price);
      state.totalPrice = priceArray.reduce((total, curr) => total + curr, 0);
    },
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
