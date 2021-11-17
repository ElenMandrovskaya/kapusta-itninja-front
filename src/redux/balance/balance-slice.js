import { createSlice } from "@reduxjs/toolkit";
import * as balanceOperations from "./balance-operations";
import * as transactionsOps from "./transactions-ops";

const balanceSlice = createSlice({
    name: "balance",
    initialState: "",
    extraReducers: {
        [balanceOperations.getBalance.fulfilled](state, action) {
            state.balance = action.payload
        },
        [balanceOperations.updBalance.fulfilled](state, action) {
            state.balance.push(action.payload)
        },
        // [transactionsOps.addExpTransaction.fulfilled](state, action) {
        //     state.balance + action.amount
        // },
        // [transactionsOps.addIncTransaction.fulfilled](state, action) {
        //     state.balance - action.amount
        // },
        // [transactionsOps.deleteExpTransaction.fulfilled](state, action) {
        //     state.balance - action.amount
        // },
        // [transactionsOps.deleteIncTransaction.fulfilled](state, action) {
        //     state.balance + action.amount
        // }
    }

})

export default balanceSlice.reducer;

