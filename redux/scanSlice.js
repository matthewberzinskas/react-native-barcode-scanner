import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  value: 0,
};

export const scanSlice = createSlice({
  name: "scanner",
  initialState,
  reducers: {
    SCAN: (state, action) => {
      state.value = action.payload.value;
      state.type = action.payload.type;
    },
  },
});

export const { SCAN } = scanSlice.actions;
export default scanSlice.reducer;
