import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./auth-operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.signUp.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
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
    },
});

export default authSlice.reducer;