import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUserLogin = createAsyncThunk(
  'api/getUserLogin',
  async ({ email, password }, { rejectWithValue }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        '/api/user/login',
        { email, password },
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export default getUserLogin;
