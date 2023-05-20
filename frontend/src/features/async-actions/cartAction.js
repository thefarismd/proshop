import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addToCart = createAsyncThunk(
  'api/addToCart', //Action Type
  async ({ productId, qty }) => {
    const response = await axios.get(`/api/products/${productId}`);

    //New payload : { productId , qty } is the initial payload, item becomes the new payload for cart/addToCart type
    const item = {
      productId: response.data._id,
      name: response.data.name,
      image: response.data.image,
      price: response.data.price,
      countInStock: response.data.countInStock,
      qty: qty,
    };
    //------//

    return item;
  }
);
