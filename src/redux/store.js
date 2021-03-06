import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-slice"
import transactionsReducer from "./transactions/transactions-slice"
// import balanceReducer from "./balance/balance-slice"

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    }),
  ];


  const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
  };

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        transactions: transactionsReducer,
        // balance: balanceReducer, 
      },
      middleware,
    //   devtools: process.env.NODE_ENV !== "production"
  })

export const persistor = persistStore(store);
