/** @format */

import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";
import toast from "react-hot-toast";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isBeingLoggedIn: false,
    errorMessage: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isBeingLoggedIn = false;
            toast.success("User has been successfully registered");
        },
        [authOperations.register.pending](state) {
            state.errorMessage = "";
            state.isBeingLoggedIn = true;
        },
        [authOperations.register.rejected](state) {
            state.errorMessage = "User with such email address already exists";
            state.isBeingLoggedIn = false;
            toast.error("User with such email address already exists");
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isBeingLoggedIn = false;
        },
        [authOperations.logIn.pending](state) {
            state.errorMessage = "";
            state.isBeingLoggedIn = true;
        },
        [authOperations.logIn.rejected](state) {
            state.errorMessage = "Wrong username or password";
            state.isBeingLoggedIn = false;
            toast.error("Wrong username or password");
        },
        [authOperations.logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = "";
            state.isLoggedIn = false;
            state.isBeingLoggedIn = false;
        },
        [authOperations.logOut.pending](state) {
            state.errorMessage = "";
            state.isBeingLoggedIn = true;
        },
        [authOperations.logOut.rejected](state) {
            state.errorMessage = "User is not authenticated";
            state.isBeingLoggedIn = false;
            toast.error("User is not authenticated");
        },
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isBeingLoggedIn = false;
        },
        [authOperations.fetchCurrentUser.pending](state) {
            state.errorMessage = "";
            state.isBeingLoggedIn = true;
        },
        [authOperations.fetchCurrentUser.rejected](state) {
            state.errorMessage = "User is not authenticated";
            state.isBeingLoggedIn = false;
        },
    },
});

// {name: 'user12222', email: 'user1234321@gmail.com', password: 'ssswww23123'}
// {name: 'user12222', email: 'user123432@gmail.com', password: 'ssswww23123'}
// {name: 'newUser123321', email: 'newuser123321@gmail.com', password: 'newuser123'}

export default authSlice.reducer;