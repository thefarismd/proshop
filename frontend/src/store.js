import { configureStore } from '@reduxjs/toolkit';
import productItemsReducer from './features/productSlice';
import productDetailsReducer from './features/productDetailsSlice';

const store = configureStore({
  reducer: {
    productList: productItemsReducer,
    productDetails: productDetailsReducer,
  },
});

export default store;
