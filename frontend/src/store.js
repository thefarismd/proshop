import { configureStore } from '@reduxjs/toolkit';
import productItemsReducer from './features/productSlice';
import productDetailsReducer from './features/productDetailsSlice';
import cartReducer from './features/cartSlice';

const store = configureStore({
  reducer: {
    productList: productItemsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
});

export default store;
