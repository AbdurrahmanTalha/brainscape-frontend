import Image from "next/image";
import React from "react";
import img from "@/public/men.jpg";
const page = () => {
    return (
        <section className="flex lg:flex-row flex-col h-[608px] lg:w-[1218px] mx-auto mt-16">
            <div className="lg:w-1/2">
                <Image src={img} width={800} height={1600} alt="talha" />
            </div>
            <div className="lg:w-1/2 flex justify-center items-center h-[608px] py-20 bg-[#171320]">
                <div className="w-4/5 mx-auto">
                    <h3 className="text-4xl font-bold text-center mb-12 text-white">Login</h3>
                    <div className=" w-full ">
                        <p className="font-medium mb-1 text-white ">Email</p>
                        <input
                            type="text"
                            placeholder="Email"
                            className="input rounded-md border-2 text-[#ffffffa6] text-xs font-medium border-[#9D77EE]  w-full "
                        />
                    </div>
                    <div className=" w-full mt-7">
                        <p className="font-medium mb-1 text-white">Password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input rounded-md border-2 text-[#ffffffa6] text-xs font-medium border-[#9D77EE]  w-full"
                        />
                        <div className="flex justify-between  text-sm font-normal mt-1">
                            <label className=" text-[#ffffffa6] cursor-pointer">Forget Password?</label>
                            <label className="text-[#ffffffa6] cursor-pointer">Don’t have a account?</label>
                        </div>
                    </div>
                    <button className="w-full bg-[#9D77EE]  text-white rounded-md h-11 mt-3 font-bold	text-xl">
                        Log in
                    </button>
                </div>
            </div>
        </section>
    );
};

export default page;
