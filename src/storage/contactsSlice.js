import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./Thunks";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}

const hendleReject = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}
const hendlePending = (state) => {
    state.isLoading = true;
}
const hendleFulfilledGetContacts = (state, { payload }) => {
    state.isLoading = false;
    state.contacts = payload;
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getContacts.fulfilled, hendleFulfilledGetContacts)
            .addMatcher(action => action.type.endsWith('/rejected'), hendleReject)
            .addMatcher(action => action.type.endsWith('/pending'), hendlePending)
    },
    reducers: {
        clearState: (state) => {
            state.contacts = [];
            state.isLoading = false;
            state.error = null;
        }
    }
});

export const reducerContact = contactSlice.reducer;
export const { clearState } = contactSlice.actions;