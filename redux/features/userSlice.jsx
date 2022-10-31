"use strict";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProfile as getUser } from "../../pages/api/listRouteApi";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("token");

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const getProfile = createAsyncThunk(
  "userThunk",
  async (payload, thunkAPI) => {
    if (cookies.get("token")) {
      const res = await fetch(getUser, {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      });
      if (!res.ok) {
        setUser(null);
      }
      const data = await res.json();
      thunkAPI.dispatch(setUser(data));
    }
    console.log(2);
  }
);

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
