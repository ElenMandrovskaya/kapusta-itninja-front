import { createSlice } from "@reduxjs/toolkit";
import * as transactionsOps from "./transactions-ops";
import authReducer from "../auth/auth-slice";
// console.log(authReducer.state.auth)

const transactionsSlice = createSlice({
    name: "transactions",
    initialState: {
        items: [],
        error: null,
        isLoading: false,
        startDate: '',
        monthlySummary: [],
    },
    reducers: { 
        setStartedDate(state, action) {
        state.startDate = action.payload}
    },
    extraReducers: {
        [transactionsOps.getExpTransactions.fulfilled]: (state, action) => {
            console.log(state)
            state.items = action.payload
        },
        [transactionsOps.getIncTransactions.fulfilled]: (state, action) => {
            state.items = action.payload
        },
        [transactionsOps.addExpTransaction.fulfilled]: (state, action) => {
            state.items.push(action.payload)
        },
        [transactionsOps.addIncTransaction.fulfilled]: (state, action) => {
            state.items.push(action.payload)
        },
        [transactionsOps.removeTransaction.fulfilled](state, action) {
            state.items = state.items.filter(({_id}) => _id !== action.payload.id);
            // console.log(.getState().user.balance === action.payload.balance)
        },

       
    }
})

export default transactionsSlice.reducer;
export const { setStartedDate } = transactionsSlice.actions;