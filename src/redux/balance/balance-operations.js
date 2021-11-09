import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:7777';

export const getBalance = createAsyncThunk('balance/getBalance', async () => {
    try {
        const { balance } = await axios.get('/user/balance');
        console.log(balance)
        return balance;
    }
    catch (error) {
        // toast.error("");
    }
});
// export const addBalance = createAsyncThunk('balance/addbalance', async balance => {
//     try {
//         const { data } = await axios.post('/balance', balance);
//         return data;
//     }
//     catch (error) {
//         // toast.error("");
//     }
// });