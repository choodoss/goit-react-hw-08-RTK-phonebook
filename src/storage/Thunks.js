import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const setDefaultToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const getContacts = createAsyncThunk("contacts/getAll", async () => {
    const response = await axios.get("/contacts");
    return response.data;
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkApi) => {
    const response = await axios.post("/contacts", contact);
    thunkApi.dispatch(getContacts())
    return response.data;
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkApi) => {
    await axios.delete(`/contacts/${id}`);
    thunkApi.dispatch(getContacts())
});

export const createUser = createAsyncThunk("user/createUser", async (value) => {
    const response = await axios.post("/users/signup", value);
    return response.data;
});

export const logIn = createAsyncThunk("user/logIn", async (value) => {
    const response = await axios.post("/users/login", value);
    const token = response.data.token;
    setDefaultToken(token);
    return response.data;
});

export const logout = createAsyncThunk("user/logout", async () => {
    await axios.post("/users/logout");
    setDefaultToken(null);
});
export const fetchAboutUser = createAsyncThunk("user/current", async () => {
    const response = await axios.get("/users/current");
    return response.data;
});