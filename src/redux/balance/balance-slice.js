import { createSlice } from "@reduxjs/toolkit";
import * as balanceOperations from './balance-operations';


const balanceSlice = createSlice({
    name: 'balance',
    initialState: '',
    extraReducers: {
        [balanceOperations.getBalance.fulfilled](state, action) {
            state.balance = action.payload
        },
        [balanceOperations.updBalance.fulfilled](state, action) {
            state.balance.push(action.payload)
        },
    }

})

export default balanceSlice.reducer;

