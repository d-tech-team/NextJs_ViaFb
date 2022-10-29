"use strict";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getProfile as getUser } from "../../pages/api/listRouteApi";
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
    if (typeof window !== "undefined" && sessionStorage.getItem("token")) {
      const res = await fetch(getUser, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      if (!res.ok) {
        setUser(null);
      }
      const data = await res.json();
      thunkAPI.dispatch(setUser(data));
    }
  }
);

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
