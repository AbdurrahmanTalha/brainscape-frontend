/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../feature/auth/authSlice";

interface RootState {
    auth: {
        token: string;
    };
}

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error && result?.error?.status === 403) {
        // try to get a new token
        const refreshResult = await baseQuery("auth/refresh-token", api, extraOptions);

        if (refreshResult?.data) {
            // update the token and retry the initial query
            const user = api.getState().auth.use;
            api.dispatch(setCredentials({ ...refreshResult.data, user }));

            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({}),
});
