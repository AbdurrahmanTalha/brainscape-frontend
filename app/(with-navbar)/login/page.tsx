"use client";
import Image from "next/image";
import React from "react";
import img from "@/public/men.jpg";
import { useAppDispatch } from "@/app/redux/hook";
import { useLoginMutation } from "@/app/redux/feature/auth/authApiSlice";
import { useForm } from "react-hook-form";
import { setCredentials } from "@/app/redux/feature/auth/authSlice";

type Inputs = {
    email: string;
    password: string;
};

const page = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm<Inputs>();
    const [login] = useLoginMutation();

    const onSubmit = async (data: Inputs) => {
        // Perform any necessary data transformations here.
        const res = await login({ email: data.email, password: data.password });

        if ("data" in res) {
            if (res.data.data != null && res.data.data != undefined) {
                dispatch(
                    setCredentials({
                        user: data,
                        accessToken: res.data.data.accessToken,
                    })
                );
            }
        }
    };

    return (
        <section className="flex lg:flex-row flex-col h-[608px] lg:w-[1218px] mx-auto mt-16 container">
            <div className="lg:w-1/2">
                <Image src={img} width={800} height={1600} alt="talha" />
            </div>
            <div className="lg:w-1/2 flex justify-center items-center h-[608px] py-20 bg-[#171320]">
                <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mx-auto">
                    <h3 className="mb-12 text-4xl font-bold text-center text-white">Login</h3>
                    <div className="w-full ">
                        <p className="mb-1 font-medium text-white ">Email</p>
                        <input
                            {...register("email")}
                            type="text"
                            placeholder="Email"
                            className="input rounded-md border-2 text-[#ffffffa6] text-xs font-medium border-[#9D77EE]  w-full "
                        />
                    </div>
                    <div className="w-full mt-7">
                        <p className="mb-1 font-medium text-white">Password</p>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Password"
                            className="input rounded-md border-2 text-[#ffffffa6] text-xs font-medium border-[#9D77EE]  w-full"
                        />
                        <div className="flex justify-between mt-1 text-sm font-normal">
                            <label className=" text-[#ffffffa6] cursor-pointer">Forget Password?</label>
                            <label className="text-[#ffffffa6] cursor-pointer">Don’t have a account?</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#9D77EE]  text-white rounded-md h-11 mt-3 font-bold text-xl"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </section>
    );
};

export default page;
