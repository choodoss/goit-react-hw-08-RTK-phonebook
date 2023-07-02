import { createSlice } from "@reduxjs/toolkit";
import { fetchAboutUser, createUser, logIn, logout } from "./Thunks";

const initialState = {
    token: '',
    isLoading: false,
    error: null,
    isLogin: false,
    isCreateLogin: false,
    userName: null,
    userEmail: null,
}

const hendleReject = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
    console.log(state.error)
}
const hendlePending = (state) => {
    state.isLoading = true;
}
const hendleFulfilledLogIn = (state, { payload }) => {
    state.isLoading = false;
    state.token = payload.token;
    state.isLogin = true;
    state.userName = payload.user.name
}
const hendleFulfilledLogout = (state) => {
    state.token = '';
    state.isLoading = false;
    state.error = null;
    state.isLogin = false;
    state.isCreateLogin = false;
    state.userName = null;
}
const hendleFulfilledCreateUser = (state) => {
    state.isLoading = false;
    state.isCreateLogin = true;
}
const hendleFulfillEdaboutUser = (state, { payload }) => {
    state.isLoading = false;
    state.userName = payload.name
    state.userEmail = payload.email
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(logIn.fulfilled, hendleFulfilledLogIn)
            .addCase(logout.fulfilled, hendleFulfilledLogout)
            .addCase(createUser.fulfilled, hendleFulfilledCreateUser)
            .addCase(fetchAboutUser.rejected, hendleFulfilledLogout)
            .addCase(fetchAboutUser.fulfilled, hendleFulfillEdaboutUser)
            .addMatcher((action) => action.type.endsWith('/rejected'), hendleReject)
            .addMatcher((action) => action.type.endsWith('/pending'), hendlePending)
    }
});

export const reducerUser = userSlice.reducer;