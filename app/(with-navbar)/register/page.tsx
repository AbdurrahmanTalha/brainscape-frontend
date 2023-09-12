"use client";
import Image from "next/image";
import React from "react";
import img from "/public/men.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { setCredentials } from "@/app/redux/feature/authSlice";
import { useAppDispatch } from "@/app/redux/hook";

// Test
const RegisterPage = () => {
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(setCredentials(data));
        console.log(data);
    };

    return (
        <section className="flex lg:flex-row flex-col h-[608px] lg:w-[1218px] w-4/5 mx-auto mt-16 lg:gap-0 gap-5 container">
            <div className="lg:w-1/2">
                <Image src={img} width={800} height={1600} alt="talha" />
            </div>
            <div className="lg:w-1/2 flex lg:flex-row flex-col justify-center items-center  bg-[#171320]">
                <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 py-10 mx-auto">
                    <h3 className="mb-12 text-4xl font-bold text-center text-white">Register</h3>
                    <div className="flex flex-col justify-between lg:flex-row gap-7">
                        <div className="w-full">
                            <div className="w-full mb-7">
                                <p className="mb-1 font-medium text-white ">First Name</p>
                                <input
                                    {...register("firstName")}
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium "
                                />
                            </div>
                            <div className="w-full mb-7">
                                <p className="mb-1 font-medium text-white ">Last Name</p>
                                <input
                                    {...register("lastName")}
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="input rounded-md border-2 border-[#9D77EE]   w-full text-xs font-medium "
                                />
                            </div>
                            <div className="w-full mb-7">
                                <p className="mb-1 font-medium text-white ">Email</p>
                                <input
                                    {...register("email")}
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className="input rounded-md border-2 border-[#9D77EE]   w-full text-xs font-medium"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full ">
                                <p className="mb-1 font-medium text-white">Middle Name</p>
                                <input
                                    {...register("middleName")}
                                    type="text"
                                    name="middleName"
                                    placeholder="Middle Name"
                                    className="input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium"
                                />
                            </div>
                            <div className="w-4/5 mt-7">
                                <p className="mb-1 text-sm font-medium text-white">Upload Profile picture</p>
                                <label className="custom-file-input-label">
                                    <input
                                        {...register("profileImg")}
                                        type="file"
                                        name="profileImg"
                                        className="hidden "
                                    />
                                    <div className="flex justify-start gap-2 items-center  w-full px-4 py-2 cursor-pointer input rounded-md border-2 border-[#9D77EE] text-xs font-medium">
                                        <FontAwesomeIcon className="w-5 h-5 text-white" icon={faUpload} />
                                        Upload Profile
                                    </div>
                                </label>
                            </div>
                            <div className="w-full mt-7">
                                <p className="mb-1 font-medium text-white">Password</p>
                                <input
                                    {...register("password")}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input rounded-md border-2 border-[#9D77EE] w-full text-xs font-medium"
                                />
                                <p className="mt-2 text-sm cursor-pointer text-end">Already Have an account?</p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#9D77EE] rounded-md text-white h-11 mt-3 font-bold	text-xl"
                    >
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
};

export default RegisterPage;
