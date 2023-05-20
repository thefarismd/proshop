import { createSlice } from '@reduxjs/toolkit';
import getUserLogin from './async-actions/userLoginAction.js';
import updateUserProfile from './async-actions/userUpdateProfileAction.js';

const localStorageUserInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userInfo: localStorageUserInfo,
  isloading: null,
  error: null,
};

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: initialState,
  reducers: {
    userLogout: (state, action) => {
      localStorage.removeItem('userInfo');
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserLogin.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getUserLogin.fulfilled, (state, action) => {
        state.isloading = false;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
      })
      .addCase(getUserLogin.rejected, (state, action) => {
        state.isloading = true;
        state.error = action.payload;
      })
      //When updateUserProfile is executed (fullfilled), it will update the login state userInfo
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
      });
  },
});

export const { userLogout } = userLoginSlice.actions;
export default userLoginSlice.reducer;
