import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
    user: { name: '', email: '', balance: 0 },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    // reducers: {
    //   setEmail: (state, action) => {
    //     state.user.email = action.payload;
    //   },
    //   setName: (state, action) => {
    //     state.user.name = action.payload;
    //   },
    //   setToken: (state, action) => {
    //     state.token = action.payload;
    //   },
    //   setisLoggedIn: (state, action) => {
    //     state.isLoggedIn = action.payload;
    //   },
    // },
    // redusers: {
    //     GoogleAuth: (state, action) => {
    //         state.user.email = action.payload.email;
    //         state.isLoggedIn = true;
    //         state.error = null;
    //     },
    // },
    extraReducers: {
        [authOperations.signUp.fulfilled](state, action) {
            state.user = action.payload.user;
            // state.token = action.payload.token;
            // state.isLoggedIn = true;
        },
        [authOperations.signIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.getCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        [authOperations.signOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperations.getBalance.fulfilled](state, action) {
            state.user.balance = action.payload.balance;
        },
        [authOperations.updBalance.fulfilled](state, action) {
            state.user.balance = action.payload;
        },
        [authOperations.googleAuth.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.user.token;
            state.isLoggedIn = true;
        },
        [authOperations.changeBalance.fulfilled](state, action) {
            state.user.balance = action.payload;
        },
    },
});

export default authSlice.reducer;
// export const { GoogleAuth } = authSlice.actions;
// export const { setName, setEmail, setToken, setisLoggedIn } = authSlice.actions;