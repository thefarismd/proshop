import { createSlice } from '@reduxjs/toolkit';
import updateProfile from '../features/async-actions/userUpdateProfileAction';

const initialState = {
  userProfile: null,
  isLoading: null,
  error: null,
  success: null,
};

const userUpdateProfileSlice = createSlice({
  name: 'userUpdateProfile',
  initialState: initialState,
  reducers: {
    resetUpdateSuccess: (state) => {
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
        state.success = true;
        localStorage.setItem('userInfo', JSON.stringify(state.userProfile));
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetUpdateSuccess } = userUpdateProfileSlice.actions;
export default userUpdateProfileSlice.reducer;
