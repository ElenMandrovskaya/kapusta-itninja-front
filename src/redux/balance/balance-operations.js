import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBalance = createAsyncThunk('contacts/getbalance', async () => {
    try {
        const { data } = await axios.get('/balance');
        return data;
    }
    catch (error) {
        // toast.error("");
    }
});

export const addBalance = createAsyncThunk('balance/addbalance', async balance => {
    try {
        const { data } = await axios.post('/balance', balance);
        return data;
    }
    catch (error) {
        // toast.error("");
    }
});