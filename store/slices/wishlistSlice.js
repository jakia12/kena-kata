const { createSlice } = require("@reduxjs/toolkit");

const initialState = { items: [] };

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const p = action.payload;
      const id = p._id;
      const existing = state.items.some((x) => x.productId === id);
      if (!existing) {
        state.items.push({
          productId: id,
          title: p.title,
          price: p.price,
          image: p.images?.[0],
        });
      }
    },
  },
});
export const { addToWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;
