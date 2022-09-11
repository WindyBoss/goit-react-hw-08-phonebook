/** @format */

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

/* 
^ For user management is used asyncThunk with axios
The personal data is based on token - backend internal token with coded user data, which is necessary to add into header authorization - " Bearer ${token}"

User management is made on backend. Frontend is only the user data transporter, but the whole logic is made on backend
Usually the registration or log in process is made by going to separate links

Examples:
user register => .../register
log in => .../login
log out => .../logout

*/
axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const register = createAsyncThunk("auth/register", async(credentials) => {
    return await axios
        .post("/users/signup", credentials)
        .then((response) => {
            token.set(response.data.token);
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
});

const logIn = createAsyncThunk("auth/logIn", async(credentials) => {
    return await axios
        .post("/users/login", credentials)
        .then((response) => {
            token.set(response.data.token);
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
});

const logOut = createAsyncThunk("auth/logout", () => {
    axios
        .post("/users/logout")
        .then(() => {
            token.unset();
        })
        .catch(function(error) {
            throw error;
        });
});

const fetchCurrentUser = createAsyncThunk(
    "auth/refresh",
    async(_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null || persistedToken === '') {
            return thunkAPI.rejectWithValue();
        }
        token.set(persistedToken);

        return await axios
            .get("/users/current")
            .then((response) => response.data)
            .catch(function(error) {
                throw error;
            });
    }
);

const operations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
};

export default operations;