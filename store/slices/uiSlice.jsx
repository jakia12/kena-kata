import { createSlice } from "@reduxjs/toolkit";

type UiState = { theme: "light" | "dark" };

const initialState: UiState = { theme: "light" };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    noop: (s) => s,
  },
});

export default uiSlice.reducer;
export const { noop } = uiSlice.actions;
