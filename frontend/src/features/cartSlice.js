import { createSlice } from '@reduxjs/toolkit';
import { addToCart } from '../actions/cartAction';

//Reload cart storage
const localStorageCartitems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cartItems: localStorageCartitems,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const addedItem = action.payload;

      const existingItem = state.cartItems.find(
        (x) => x.productId === addedItem.productId
      );

      if (existingItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.productId === existingItem.productId ? addedItem : x
        );
      } else {
        state.cartItems = [...state.cartItems, addedItem];
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); //Store cart to local storage
    });
  },
});

export default cartSlice.reducer;
