import { createSlice } from "@reduxjs/toolkit";

type CartState = { items: Array<{ id: string, qty: number }> };

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // UI only for now
    noop: (s) => s,
  },
});

export default cartSlice.reducer;
export const { noop } = cartSlice.actions;
