// uploadSlice.js
import { createSlice } from "@reduxjs/toolkit";

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    filess: [],
    name: "",
    description: "",
    uploadProgress: 0,
    selectedFile: null,
    isDragging: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setFilee: (state, action) => {
      state.filess.push(action.payload);
    },
    delFile: (state, action) => {
      state.filess.splice(action.payload, 1);
    },
  },
});

export const { setFilee, setName, setDescription, delFile } =
  uploadSlice.actions;

export default uploadSlice.reducer;
