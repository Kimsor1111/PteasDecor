import { createSlice } from "@reduxjs/toolkit";
const getWishlist = () => {
  const stored = localStorage.getItem("wishlist");
  return stored ? JSON.parse(stored) : [];
};
const saveWishlist = (wishlist) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
const initialState = {
  wishlistItems: getWishlist(),
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addtowishlist: (state, action) => {
      const product = action.payload;
      const { id } = product;
      const existinWishlist = state.wishlistItems.find(
        (item) => item.id === id
      );
      if (existinWishlist) return;
      state.wishlistItems.push(product);
      saveWishlist(state.wishlistItems);
    },
    removefromwishlist: (state, action) => {
      const id = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== id
      );
      saveWishlist(state.wishlistItems);
    },
    emptywishlist: (state, _) => {
      state.wishlistItems = [];
      saveWishlist(state.wishlistItems);
    },
  },
});
export const { addtowishlist, removefromwishlist, emptywishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
