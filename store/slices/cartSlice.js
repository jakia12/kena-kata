import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { productId, title, price, qty, image }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const p = action.payload;
      const id = p._id;

      const existing = state.items.find((x) => x.productId === id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({
          productId: id,
          title: p.title ?? p.name ?? "Untitled",
          price: Number(p.price ?? 0),
          image: p.images?.[0] ?? "",
          qty: 1,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
