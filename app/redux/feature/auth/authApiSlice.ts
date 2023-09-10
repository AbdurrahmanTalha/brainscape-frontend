import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: Credential => ({
                url: "/auth/login",
                method: "POST",
                body: { ...Credential },
            }),
        }),
        register: builder.mutation({
            query: data => ({
                url: "/user/create-student",
                method: "POST",
                body: { ...data },
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
