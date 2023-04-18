import { createSlice } from '@reduxjs/toolkit';
import { getProductDetails } from '../actions/getProductDetails';

const initialState = {
  productDetails: [],
  isLoading: null,
  error: null,
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      });
  },
});

export default productDetailsSlice.reducer;
