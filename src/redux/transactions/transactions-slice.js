import { createSlice } from "@reduxjs/toolkit";
import * as transactionsOps from "./transactions-ops";

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        items: [],
        error: null,
        isLoading: false,
    },
    extraReducers: {
        [transactionsOps.getExpTransactions.fulfilled]: (_, { payload }) => {
            state.items = [...payload.data];
        },

        [transactionsOps.addExpTransaction.fulfilled]: (state, { payload }) => {
            state.items = [payload, ...state.items];
        },
        [transactionsOps.addExpTransaction.pending]: (state, _) => {
            state.error = null;
            state.isLoading = false;
        },
        [transactionsOps.addExpTransaction.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },

         [transactionsOps.deleteExpTransaction.fulfilled]: (state, { payload }) => {
             state.items = state.items.filter(el => el._id !== payload);
             state.isLoading = false;
        },
        [transactionsOps.deleteExpTransaction.pending]: (state, _) => {
            state.error = null;
            state.isLoading = true;
        },
        [transactionsOps.deleteExpTransaction.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },


        [transactionsOps.getIncTransactions.fulfilled]: (_, { payload }) => {
            state.items = [...payload.data];
        },
        [transactionsOps.addIncTransaction.fulfilled]: (state, { payload }) => {
            state.items = [payload, ...state.items];
        },
        [transactionsOps.addIncTransaction.pending]: (state, _) => {
            state.error = null;
            state.isLoading = false;
        },
        [transactionsOps.addIncTransaction.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },

        [transactionsOps.deleteIncTransaction.fulfilled]: (state, { payload }) => {
             state.items = state.items.filter(el => el._id !== payload);
             state.isLoading = false;
        },
        [transactionsOps.deleteIncTransaction.pending]: (state, _) => {
            state.error = null;
            state.isLoading = true;
        },
        [transactionsOps.deleteIncTransaction.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    }
})

export default transactionsSlice.reducer;