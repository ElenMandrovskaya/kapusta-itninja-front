import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance/balance-slice"

export const store = configureStore({
    reducer: {
          balance: balanceReducer, 
      },
      devtools: process.env.NODE_ENV !== 'production'
  })

export default store;