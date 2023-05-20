import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductItems = createAsyncThunk(
  'api/getProductItems', //Action Type
  async (arg, { rejectWithValue }) => {
    //---- Action Payload -----//
    try {
      const response = await axios.get('/api/products/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    } //----//
  }
);
