import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice'
import balanceReducer from "./balance/balance-slice"

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        // balance: balanceReducer, 
      },
      middleware,
    //   devtools: process.env.NODE_ENV !== 'production'
  })

export const persistor = persistStore(store);
