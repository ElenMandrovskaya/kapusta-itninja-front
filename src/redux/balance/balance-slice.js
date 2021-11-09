import { createSlice } from "@reduxjs/toolkit";
import * as balanceOperations from './balance-operations';


const initialBalance = 0;
const balanceSlice = createSlice ({
    name: 'balance',
    initialBalance,
    extraReducers: {
        [balanceOperations.getBalance.fulfilled](state, action) {
            // state.items = action.payload
            console.log(state)
        },
        [balanceOperations.addBalance.fulfilled](state, action) {
            // state.items.push(action.payload)
            // state.items = [...state.items, action.payload];  
        },
    }
})

export default balanceSlice.reducer;