import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import uiReducer from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer, // UI-only state (drawer etc.)
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefault) => getDefault().concat(apiSlice.middleware),
});
