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
export const fetchDataSlice = createSlice({
  name: "books",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiDataUsingAxios.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchApiDataUsingAxios.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchApiDataUsingAxios.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default fetchDataSlice.reducer;

export const fetchApiDataUsingAxios = createAsyncThunk(
  "books/fetch",
  async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${1154}&offset=${0}`
    );
    return response.data;
  }
);
