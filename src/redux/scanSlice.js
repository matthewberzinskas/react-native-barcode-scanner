import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  value: 0,
  data: {},
};

export const scanSlice = createSlice({
  name: "scanner",
  initialState,
  reducers: {
    SCAN: (state, action) => {
      state.value = action.payload.value;
      state.type = action.payload.type;
    },
    SET: (state, action) => {
      state.data = action.payload;
    },
    RESET: (state) => {
      state.value = 0;
      state.type = "";
    },
  },
});

export const { SCAN, RESET, SET } = scanSlice.actions;
export default scanSlice.reducer;
