import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const projects = createSlice({
  name: "projects",
  initialState: data.projects,
  reducers: {
    addProject(state, action) {
      return state.concat(action.payload);
    },
  },
});

export default projects.reducer;

export const { addProject } = projects.actions;
