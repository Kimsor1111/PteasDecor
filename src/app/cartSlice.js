import { createSlice, current } from "@reduxjs/toolkit";
const getCart = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};
const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
const initialState = {
  cartItems: getCart(),
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const product = action.payload;
      const { id, qty, stock } = product;
      const existinCart = state.cartItems.find((item) => item.id === id);
      if (existinCart) {
        if (existinCart.qty + qty > stock) return;
        existinCart.qty += qty;
      } else state.cartItems.push(product);
      saveCart(state.cartItems);
    },
    removefromcart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      saveCart(state.cartItems);
    },
    increaseqty: (state, action) => {
      const { id, qty, stock } = action.payload;
      if (qty == stock) return;
      const item = state.cartItems.find((item) => item.id === id);
      item.qty += 1;
      saveCart(state.cartItems);
    },
    decreaseqty: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      item.qty = item.qty - 1;
      if (item.qty <= 0)
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      saveCart(state.cartItems);
    },
    wishlistocart: (state, action) => {
      const product = action.payload;
      state.cartItems.push(product);
      saveCart(state.cartItems);
    },
    emptycart: (state, _) => {
      state.cartItems = [];
      saveCart(state.cartItems);
    },
  },
});
export const {
  addtocart,
  removefromcart,
  increaseqty,
  decreaseqty,
  wishlistocart,
  emptycart,
} = cartSlice.actions;
export default cartSlice.reducer;
