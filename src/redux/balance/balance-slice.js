import { createSlice } from "@reduxjs/toolkit";
import * as balanceOperations from './balance-operations';

const balanceSlice = createSlice({
    name: 'balance',
    initialState: '0',
    extraReducers: {
        [balanceOperations.getCurrentBalance.fulfilled](state, action) {
            state.items = action.payload
        },
    }

})

export default balanceSlice.reducer;

