import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const getTotalPrice = (state) => {
  const priceArray = state.cartItems.map((item) => item.price);
  const totalPrice = priceArray.reduce((total, curr) => total + curr, 0);
  return totalPrice;
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.totalPrice = getTotalPrice(state);
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) state.cartItems.splice(index, 1);
      state.totalPrice = getTotalPrice(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
