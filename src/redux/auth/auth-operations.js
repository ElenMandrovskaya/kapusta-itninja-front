import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk('auth/signUp', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('api/user/signup', credentials);
        token.set(data.token);
        toast.warning('You have successfully registered')
        return data;
    }
    catch (error) {
        toast.warning('Such an account already exists');
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const signIn = createAsyncThunk('auth/signIn', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/api/users/login', credentials);
        token.set(data.token);
        toast.warning('You are logged into your account')
        return data;
    }
    catch (error) {
        toast.warning('Something went wrong! Verify your the credentials');
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
    try {
        await axios.post('/api/user/logout');
        token.unset();
        toast.warning('You are logged out of your account')
    }
    catch (error) {
        toast.warning('Something went wrong!');
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getCurrentUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
        const { data } = await axios.get('/api/users/current');
        return data;
    }
    catch (error) {
        toast.warning('Could not identify you');
        return thunkAPI.rejectWithValue(error.message);
    }
});