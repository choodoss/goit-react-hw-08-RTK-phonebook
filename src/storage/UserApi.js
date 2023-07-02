// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const userApi = createApi({
//     reducerPath: 'userApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://connections-api.herokuapp.com'
//     }),
//     tagTypes: ['User'],
//     endpoints: (builder) => ({
//         authUser: builder.mutation({
//             query: (value) => {
//                 const { email, password } = value;
//                 return {
//                     url: `/users/login`,
//                     method: 'POST',
//                     body: { email, password },
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 };
//             },
//             providesTags: ['User'],
//         }),
//         createUser: builder.mutation({
//             query: (value) => {
//                 return {
//                     url: `/users/signup`,
//                     method: 'POST',
//                     body: value,
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 };
//             },
//             providesTags: ['User'],
//         }),
//         LogOutUser: builder.mutation({
//             query: () => ({
//                 url: `/users/logout/`,
//                 credentials: 'include'
//             }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             invalidatesTags: ['User'],
//         }),
//         getAllContacts: builder.query({
//             query: () => ({
//                 url: `/contacts`,
//                 credentials: 'include'
//             }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             providesTags: ['Contacts'],
//         }),

//         addContact: builder.mutation({
//             query: (contact) => ({
//                 url: `/contacts`,
//                 method: 'POST',
//                 credentials: 'include',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: { name: contact.get('name'), phoneNumber: contact.get('phoneNumber') },
//             }),
//             invalidatesTags: ['Contacts'],
//         }),
//         deleteContact: builder.mutation({
//             query: (id) => ({
//                 url: `/contacts/${id}`,
//                 method: 'DELETE',
//                 credentials: 'include'
//             }),
//             invalidatesTags: ['Contacts'],
//         }),
//     }),
// });

// export const {
//     useAuthUserMutation,
//     useLogOutUserMutation,
//     useCreateUserMutation, useGetAllContactsQuery, useAddContactMutation, useDeleteContactMutation
// } = userApi;


