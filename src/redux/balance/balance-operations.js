import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:7777';

export const getCurrentBalance = createAsyncThunk('/balance', async () => {
    try {
        const { balance } = await axios.get('/users');
        console.log(balance)
        return balance;
    }
    catch (error) {
        // toast.error("");
    }
});
getCurrentBalance()
// export const addBalance = createAsyncThunk('balance/addbalance', async balance => {
//     try {
//         const { data } = await axios.post('/balance', balance);
//         return data;
//     }
//     catch (error) {
//         // toast.error("");
//     }
// });