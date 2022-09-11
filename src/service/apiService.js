/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
    reducerPath: "contacts",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://goit-phonebook-api.herokuapp.com/contacts",
        // In RTK query prepareHeaders - allow to add any settings to RTK query fetches (cache, headers)
        prepareHeaders: (headers, { getState }) => {
            // can take state from redux
            const token = getState().auth.token;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    // cache time settings
    keepUnusedDataFor: 0,
    // allow refetch on component mount
    refetchOnMountOrArgChange: true,
    tagTypes: ["Contacts"],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => "",
            transformResponse: (res) => res.sort((a, b) => b.name - a.name),
            providesTags: ["Contacts"],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `${id}`,
                method: "DELETE",
                body: id,
            }),
            transformResponse: (response) => response,
            invalidatesTags: ["Contacts"],
        }),
        addContact: builder.mutation({
            query: (contact) => ({
                query: () => "",
                method: "POST",
                body: contact,
            }),
            transformResponse: (response) => response,
            invalidatesTags: ["Contacts"],
        }),
        updateContact: builder.mutation({
            query: (contact) => ({
                url: `${contact.id}`,
                method: "PATCH",
                body: { number: contact.number, name: contact.name },
            }),
            transformResponse: (response) => response,
            invalidatesTags: ["Contacts"],
        }),
    }),
});

export default contactApi;
export const {
    useGetContactsQuery,
    useDeleteContactMutation,
    useAddContactMutation,
    useUpdateContactMutation,
} = contactApi;