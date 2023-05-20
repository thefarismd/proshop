import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import getUserLogin from './userLoginAction';

const registerUser = createAsyncThunk(
  'api/registerUser',
  async ({ name, email, password }, thunkAPI) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        '/api/user',
        { name, email, password },
        config
      );

      thunkAPI.dispatch(getUserLogin({ email, password }));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export default registerUser;
