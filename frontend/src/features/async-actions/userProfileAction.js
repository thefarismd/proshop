import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUserProfile = createAsyncThunk(
  'api/getUserProfile',
  async (_, thunkAPI) => {
    const {
      userLogin: { userInfo },
    } = thunkAPI.getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    try {
      const response = await axios.get(`/api/user/profile`, config);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export default getUserProfile;
