import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ productId, qty }) => {
    const response = await axios.get(`/api/products/${productId}`);

    // console.log(response);

    const item = {
      productId: response.data._id,
      name: response.data.name,
      image: response.data.image,
      price: response.data.price,
      countInStock: response.data.countInStock,
      qty: qty,
    };
    // console.log(item);

    return item;
  }
);
