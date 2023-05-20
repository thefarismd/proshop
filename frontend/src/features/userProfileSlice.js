import { createSlice } from '@reduxjs/toolkit';
import userProfile from './async-actions/userProfileAction';

const initialState = {
  userProfile: null,
  isLoading: null,
  error: null,
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.isLoading = false; //testing this with false
        state.error = action.payload;
      });
  },
});

export default userProfileSlice.reducer;
