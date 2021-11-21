import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getExpTransactions = createAsyncThunk("transactions/getExpTransactions", async () => {
    try {
        const { data } = await axios.get("/api/transactions/expense");
        return data.result.transactions;
    } catch (error) {
        return []
    }
});

export const getIncTransactions = createAsyncThunk("transactions/getIncTransactions", async () => {
    try {
        const { data } = await axios.get("/api/transactions/income");
        return data.result.transactions;
    } catch (error) {
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
        return []
    }
}
);

export const removeTransaction = createAsyncThunk('transactions/removetransactions', async (id) => {
    try {
        const { data } = await axios.delete(`api/transactions/${id}`);
        // console.log(data.result.balance)

        return {id: id, balance: data.result.balance}
    }
    catch (error) {
     
    }
});
