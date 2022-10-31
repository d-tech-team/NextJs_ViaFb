"use strict";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAProduct, getHistory } from "../../pages/api/listRouteApi";

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
    let data = await res.json();

    data = await Promise.all(
      data.map(async (item) => {
        let product = await fetch(getAProduct(item.product));
        product = await product.json();
        return {
          ...item,
          product: product ? product.title : "title",
        };
      })
    ).then((res) => res);

    thunkAPI.dispatch(setData({ histories: data }));
  }
);

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
