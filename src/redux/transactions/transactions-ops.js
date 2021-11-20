import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as transactionsApi from "../../api/transactionsApi";

// axios.defaults.baseURL = "https://kapusta-finance-tracker.herokuapp.com";

export const getExpTransactions = createAsyncThunk("transactions/getExpTransactions", async () => {
    try {
        const { data } = await axios.get("/api/transactions/expense");
        return data.result.transactions;
    } catch (error) {
        // toast.error("");
        return []
    }
});

export const getIncTransactions = createAsyncThunk("transactions/getIncTransactions", async () => {
    try {
        const { data } = await axios.get("/api/transactions/income");
        return data.result.transactions;
    } catch (error) {
        // toast.error("");
        return []
    }
});

export const addExpTransaction = createAsyncThunk("transactions/addExpTransaction", async ({ typeTransaction, date, description, categoryId, value }) => {
try {
    const newTransaction = {
        description: description,
        value: value,
        typeTransaction: typeTransaction,
    }
    const { data } = await axios.post(`/api/transactions/expense/${categoryId}/?day=${date.day}&month=${date.month}&year=${date.year}`, newTransaction );
    return data.result.result;
   
} catch (error) {
    // toast.error("");
    return []
}
}
);

export const addIncTransaction = createAsyncThunk("transactions/addIncTransaction", async ({ typeTransaction, date, description, categoryId, value }) => {
    try {
        const newTransaction = {
            description: description,
            value: value,
            typeTransaction: typeTransaction,
        }
        const { data } = await axios.post(`/api/transactions/income/${categoryId}/?day=${date.day}&month=${date.month}&year=${date.year}`, newTransaction );
        return data.result.result;
       
    } catch (error) {
        // toast.error("");
        return []
    }
}
);

export const removeTransaction = createAsyncThunk('contacts/removecontact', async id => {
    try {
        await axios.delete(`api/transactions/${id}`);
    }
    catch (error) {
     
    }
});
