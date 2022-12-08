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
export const fetchDetailSlice = createSlice({
  name: "detailData",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchDetail.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});
export default fetchDetailSlice.reducer;
export const fetchDetail = createAsyncThunk("detailData/fetch", async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
});
