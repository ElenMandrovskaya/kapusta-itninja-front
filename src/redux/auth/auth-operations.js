import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as userApi from '../../api/userApi';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await userApi.signUp(credentials);
      // token.set(data.result.token);
      toast.warning(
        'You have successfully registered please confirm your email',
      );
      return data.result;
    } catch (error) {
      toast.warning('Such an account already exists');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const googleAuth = createAsyncThunk(
  'auth/googleAuth',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await userApi.googleAuth(credentials);
      // token.set(data.result.token);
      toast.warning('You have successfully loggin with Google');
      return data.result;
    } catch (error) {
      toast.warning('Error');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const signIn = createAsyncThunk(
  'auth/google',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await userApi.signIn(credentials);
      token.set(data.result.token);
      toast.warning('You are logged into your account');
      return data.result;
    } catch (error) {
      toast.warning('Something went wrong! Check your the credentials');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await userApi.signOut();
    token.unset();
    toast.warning('You are logged out of your account');
  } catch (error) {
    toast.warning('Something went wrong!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await userApi.getCurrentUser();
      return data.result.user;
    } catch (error) {
      toast.warning('Could not identify you');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updBalance = createAsyncThunk(
  'balance/updBalance',
  async balance => {
    try {
      const { data } = await axios.post('/api/user/balance', balance);
      return data;
    } catch (error) {
      // toast.error("");
    }
  },
);
export const getBalance = createAsyncThunk('balance/getBalance', async () => {
  try {
    const { data } = await axios.get('/api/user/balance');
    // console.log(data.result)
    return data.result;
  } catch (error) {
    // toast.error("");
  }
});
