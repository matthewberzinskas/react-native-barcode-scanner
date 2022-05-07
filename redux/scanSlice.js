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
    RESET: (state) => {
      state.value = 0;
      state.type = "";
    },
  },
});

export const { SCAN, RESET } = scanSlice.actions;
export default scanSlice.reducer;
