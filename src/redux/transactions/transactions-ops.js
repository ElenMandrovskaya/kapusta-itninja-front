import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as transactionsApi from "../../api/transactionsApi";

axios.defaults.baseURL = 'https://kapusta-finance-tracker.herokuapp.com';

export const getExpTransactions = createAsyncThunk('transactions/getExpTransactions', async () => {
    try {
        const { data } = await axios.get('/api/transactions/expense');
        // console.log(data)
        return data;
    } catch (error) {
        // toast.error("");
    }
});

export const getIncTransactions = createAsyncThunk('transactions/getIncTransactions', async () => {
    try {
        const { data } = await axios.get('/api/transactions/income');
        console.log(data)
        return data;
    } catch (error) {
        // toast.error("");
    }
});

export const addExpTransaction = createAsyncThunk("transactions/addExpTransaction",
    async transactions => {
        const newTransaction = await transactionsApi.addExpTransactions(transactions);
        return newTransaction.data.result;
    }
);

export const addIncTransaction = createAsyncThunk("transactions/addIncTransaction",
    async transactions => {    
        const newTransaction = await transactionsApi.addIncTransactions(transactions);
        return newTransaction.data.result;
    }
);

export const deleteExpTransaction = createAsyncThunk("/transactions/deleteExpTransaction",
        async transactionId => {
             await transactionsApi.getExpTransactions(transactionId);
                return transactionId;
    })

export const deleteIncTransaction  = createAsyncThunk ("/transactions/deleteExpTransaction",
        async transactionId => {
             await transactionsApi.getIncTransactions(transactionId);
                return transactionId;
    })

export const editBalance = createAsyncThunk("/transactions/editBalance",
    async balance => {
        await transactionsApi.editBalance(balance);
        return balance;
    }
)
