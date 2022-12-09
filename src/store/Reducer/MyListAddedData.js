import { createSlice } from "@reduxjs/toolkit";
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
    addToMyList(state, action) {
      const itemInCart = state.data.find((item) => item.dataid === action.payload.dataid);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.data.push(action.payload);
    }
  },
    deleteFromMyList(state, action) {
      const removeItem= state.data?.filter((item) => item.dataid !== action.payload);
      state.data = removeItem;
    },
  },
});
export const { addToMyList, deleteFromMyList} =  MyComponentListpageSlice.actions;
export default MyComponentListpageSlice.reducer;
