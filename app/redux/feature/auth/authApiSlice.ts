import { IApiResponse } from "@/app/interfaces/response";
import { apiSlice } from "../../api/apiSlice";
import { IRefreshTokenResponse, IUser } from "@/app/interfaces/user";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<IApiResponse<IRefreshTokenResponse>, { email: string; password: string }>({
            query: data => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
        }),
        register: builder.mutation<IApiResponse<IUser>, Partial<IUser>>({
            query: data => ({
                url: "/user/create-student",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
