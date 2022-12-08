import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
export const STATUSES = Object({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
export const initialState = {
  data: [],
  status: STATUSES.IDLE,
};
export const MyComponentListpageSlice = createSlice({
  name: "myListData",
  initialState,
  reducers: {
    add(state, action) {
      const itemInCart = state.data.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    // incrementCartQuantity: (state, action) => {
    //   const item = state.data.find((item) => item.id === action.payload);
    //   item.quantity++;
    // },
    // decrementCartQuantity: (state, action) => {
    //   const item = state.data.find((item) => item.id === action.payload);
    //   if (item.quantity === 1) {
    //     item.quantity = 1
    //   } else {
    //     item.quantity--;
    //   }
    // },

    remove(state, action) {
      const removeItem= state.data?.filter((item) => item.id !== action.payload);
      state.data = removeItem;
    },
  },
});
export const { add, remove ,  incrementCartQuantity, decrementCartQuantity} =  MyComponentListpageSlice.actions;
export default MyComponentListpageSlice.reducer;
