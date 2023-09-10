import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: Credential => ({
                url: "/auth",
                method: "POST",
                body: { ...Credential },
            }),
        }),
    }),
});

export const { useLoginMutation } = authApiSlice;
