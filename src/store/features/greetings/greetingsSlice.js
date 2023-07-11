import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const greetingsData = createAsyncThunk('Get greetings', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/greetings');
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const greetings = createSlice({
  name: 'greetings',
  initialState: {
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [greetingsData.pending]: (state) => {
      state.loading = true;
    },

    [greetingsData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },

    [greetingsData.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default greetings;
