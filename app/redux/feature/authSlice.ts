/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: { user: null, token: null }
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            const { user, accessToken } = payload
            state.value = { user, token: accessToken }
        },
        logOut: (state) => {
            state.value = { user: null, token: null }
        }
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;


export const selectUser = (state: any) => state.auth.value.user;
export const selectToken = (state: any) => state.auth.value.token;
