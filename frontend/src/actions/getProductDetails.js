import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductDetails = createAsyncThunk(
  'productDetails/getProductDetails', //Action Type
  async (productId, { rejectWithValue }) => {
    //---- Action Payload -----//
    try {
      const response = await axios.get(`/api/products/${productId}`);
      // console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    } //----//
  }
);
