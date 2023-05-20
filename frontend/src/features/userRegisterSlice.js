import { createSlice } from '@reduxjs/toolkit';
import registerUser from './async-actions/userRegisterAction';

const localStorageUserInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userInfo: localStorageUserInfo,
  isloading: null,
  error: null,
};

const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState: initialState,
  reducers: {
    resetUserRegisterState: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isloading = false;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isloading = true;
        state.error = action.payload;
      });
  },
});

export const { resetUserRegisterState } = userRegisterSlice.actions;
export default userRegisterSlice.reducer;
