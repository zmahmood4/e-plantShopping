import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.name === product.name);

      if (existingProduct) {
        // If the product is already in the cart, increment the quantity
        existingProduct.quantity += 1;
      } else {
        // If it's not in the cart, add it
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const name = action.payload; // Expect only name as payload
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
