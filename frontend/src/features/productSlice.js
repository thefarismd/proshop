import { createSlice } from '@reduxjs/toolkit';
import { getProductItems } from './async-actions/ProductsAction';

const initialProductItemsState = {
  products: [],
  isLoading: null,
  error: null,
};

const productItemsSlice = createSlice({
  name: 'product',
  initialState: initialProductItemsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProductItems.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      });
  },
});

export default productItemsSlice.reducer;
