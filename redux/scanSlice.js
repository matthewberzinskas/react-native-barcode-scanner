import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const scanSlice = createSlice({
  name: "scanner",
  initialState,
  reducers: {
    SCAN: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SCAN } = scanSlice.actions;
export default scanSlice.reducer;
