"use strict";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistory } from "../../pages/api/listRouteApi";

const initialState = {
  data: null,
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
});

export const histories = createAsyncThunk(
  "dataThunk",
  async (payload, thunkAPI) => {
    const res = await fetch(getHistory);
    if (!res.ok) {
      thunkAPI.dispatch(setData({ histories: [] }));
    }
    const data = await res.json();
    thunkAPI.dispatch(setData({ histories: data }));
  }
);

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
