import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://kapusta-finance-tracker.herokuapp.com';

export const getBalance = createAsyncThunk('balance/getBalance', async () => {
    try {
        const { data } = await axios.get('/user/balance');
        console.log(data)
        return data;
    }
    catch (error) {
        // toast.error("");
    }
});
export const updBalance = createAsyncThunk('balance/updBalance', async balance => {
    try {
        const { data } = await axios.post('/user/balance', balance);
        return data;
    }
    catch (error) {
        // toast.error("");
    }
});