import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const favorite = createSlice({
  name: "favorite",
  initialState: data.favorites,
  reducers: {
    setData(_, action) {
      return action.payload;
    },
  },
});

export default favorite.reducer;

export const { setData } = favorite.actions;
