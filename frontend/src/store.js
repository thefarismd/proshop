import { configureStore } from '@reduxjs/toolkit';
import productItemsReducer from './features/productSlice';
import productDetailsReducer from './features/productDetailsSlice';
import cartReducer from './features/cartSlice';
import userLoginReducer from './features/userLoginSlice';
import userRegisterReducer from './features/userRegisterSlice';
import userProfileReducer from './features/userProfileSlice';
import userUpdateProfileReducer from './features/userUpdateProfileSlice';

const store = configureStore({
  reducer: {
    productList: productItemsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userProfileReducer,
    userUpdateProfile: userUpdateProfileReducer,
  },
});

export default store;
