import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://kapusta-finance-tracker.herokuapp.com';

export const addExpTransaction =
    ({ date, amount, categoryId, description }) = createAsyncThunk("transactions/addExpTransaction", 
        async () => {
    const transaction = {
      date,
      amount,
      categoryId,
      description,
    };
            try {
                const { data } = await axios.post(`/transactions/expenses/${categoryId}`, transaction);
                return data;
            }
            catch (error) {
                // toast.error("");
            }
})

export const addIncTransaction =
    ({ date, amount, categoryId, description }) = createAsyncThunk("transactions/addIncTransaction", 
        async () => {
    const transaction = {
      date,
      amount,
      categoryId,
      description,
    };
            try {
                const { data } = await axios.post(`/transactions/incomes/${categoryId}`, transaction);
                return data;
            }
            catch (error) {
                // toast.error("");
            }
})

export const deleteExpTransaction = ({ id }) = createAsyncThunk ("/transactions/deleteExpTransaction",
        async () => {
            try {
                const { data } = await axios.delete(`/transactions/expense/${id}`);
                return data;
            }
            catch (error) {
                // toast.error("");
            }
})

export const deleteIncTransaction = ({ id }) = createAsyncThunk ("/transactions/deleteIncTransaction",
        async () => {
            try {
                const { data } = await axios.delete(`/transactions/incomes/${id}`);
                return data;
            }
            catch (error) {
                // toast.error("");
            }
})