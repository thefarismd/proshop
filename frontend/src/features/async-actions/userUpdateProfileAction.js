import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const updateUserProfile = createAsyncThunk(
  'api/updateUserProfile',
  async (currentUserInfo, thunkAPI) => {
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
      const response = await axios.put(
        `/api/user/profile`,
        currentUserInfo,
        config
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export default updateUserProfile;
