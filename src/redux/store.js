import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import BalanceReducer from "./balance/balance-slice";

const store = configureStore({
    reducer: BalanceReducer,
    devtools: process.env.NODE_ENV !== 'production'
})

export default store;