
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: [],
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.value.length > 0) {
        if (state.value.includes(action.payload._id)) {
          alert("item already in the cart");
        } else {
          state.value.push(action.payload._id);
          state.cart.push(action.payload);
        }
        console.log(action.payload);
      } else {
        state.value.push(action.payload._id);
        state.cart.push(action.payload);
      }
    },

  
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return action.payload._id !== item._id;
      });

      state.value.pop();
    },
    increaseQuantity: (state, action) => {
      let item = state.cart.find((a) => {
        return a._id === action.payload;
      });
      item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      let item = state.cart.find((a) => {
        return a._id === action.payload;
      });
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
