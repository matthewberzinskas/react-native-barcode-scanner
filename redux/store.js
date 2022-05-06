import { configureStore } from "@reduxjs/toolkit";
import scanReducer from "./scanSlice";

export const store = configureStore({
  reducer: {
    scanner: scanReducer,
  },
});
