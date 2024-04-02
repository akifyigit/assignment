import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./Slices/filtersSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});
