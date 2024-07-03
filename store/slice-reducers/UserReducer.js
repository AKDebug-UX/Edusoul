import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const layoutSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeUser(state, action) {
      return JSON.parse(JSON.stringify(action.payload));
    },
  },
});

export const { initializeUser } = layoutSlice.actions;

export default layoutSlice.reducer;
