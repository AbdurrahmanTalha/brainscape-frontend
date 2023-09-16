import PrimaryBtn from "@/app/components/ui/PrimaryBtn";
import React from "react";

export default function page() {
    return (
        <div className="flex flex-col">
            <div className="bg-[#171320] w-full mx-auto h-[100px] flex justify-center items-center">
                <div className="flex justify-center items-center space-x-2 lg:space-x-4">
                    <h3 className="font-bold text-[24px] text-[#fff]">{"<"}</h3>
                    <div className="max-w-[100px] w-[100px] min-w-[40px] h-[15px] bg-[#33AA4D] rounded-full"></div>
                    <div className="max-w-[100px] w-[100px] min-w-[40px] h-[15px] bg-[#FFFFFF65] rounded-full"></div>
                    <div className="max-w-[100px] w-[100px] min-w-[40px] h-[15px] bg-[#FFFFFF65] rounded-full"></div>
                    <div className="max-w-[100px] w-[100px] min-w-[40px] h-[15px] bg-[#FFFFFF65] rounded-full"></div>
                    <h3 className="font-bold text-[24px] text-[#fff]">{">"}</h3>
                </div>
            </div>

            <div className="container">
                <div className="flex mx-auto justify-center items-center my-[10vh]">
                    <div className="flex flex-1 justify-center flex-col">
                        <div className="mx-auto">
                            <h3 className="font-bold text-[24px] text-[#fff]">Unknown Value</h3>
                            <p className="text-[#FFFFFF65] font-regular mt-[20px] mb-[50px] ">
                                The scale shows the weight of the items in kilograms (kg).(kg).
                            </p>
                        </div>

                        <div className="mx-auto">
                            <svg
                                width="145"
                                height="96"
                                viewBox="0 0 145 96"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 46.0215H46.0215V0H0V46.0215Z" fill="#F2BD57" />
                                <path d="M0 95.0431H46.0215V49.0215H0V95.0431Z" fill="#F2BD57" />
                                <path d="M49.0215 46.0215H95.043V0H49.0215V46.0215Z" fill="#F2BD57" />
                                <path d="M49.0215 95.0431H95.043V49.0215H49.0215V95.0431Z" fill="#F2BD57" />
                                <path d="M98.043 95.0431H144.064V49.0215H98.043V95.0431Z" fill="#F2BD57" />
                            </svg>
                            <p className="font-bold text-[32px] text-white">---------</p>
                            <p className="font-bold text-[32px] text-white text-center">40</p>
                        </div>
                        <div className="w-[500px] bg-[#171320] rounded-[10px] py-[20px] px-[30px] mx-auto">
                            <h2 className="text-[24px] font-medium text-white">What is the value of 1 square?</h2>
                            <form action="" className="mt-[20px]">
                                <div className="form-control w-[100px]">
                                    <label className="label cursor-pointer">
                                        <input type="radio" name="radio-10" className="radio" checked />
                                        <span className="label-text font-medium text-white text-[16px]">Red pill</span>
                                    </label>
                                </div>
                                <div className="form-control w-[100px]">
                                    <label className="label cursor-pointer">
                                        <input type="radio" name="radio-10" className="radio" checked />
                                        <span className="label-text font-medium text-white text-[16px]">Red pill</span>
                                    </label>
                                </div>
                                <div className="form-control w-[100px]">
                                    <label className="label cursor-pointer">
                                        <input type="radio" name="radio-10" className="radio" checked />
                                        <span className="label-text font-medium text-white text-[16px]">Red pill</span>
                                    </label>
                                </div>
                                <div className="form-control w-[100px]">
                                    <label className="label cursor-pointer">
                                        <input type="radio" name="radio-10" className="radio" checked />
                                        <span className="label-text font-medium text-white text-[16px]">Red pill</span>
                                    </label>
                                </div>
                                <div className="lg:md:flex justify-between items-center mt-[20px]">
                                    <PrimaryBtn
                                        name="Check answer"
                                        padding="0"
                                        fontWeight="bold"
                                        width="180px"
                                        height="40px"
                                    />
                                    <button
                                        className="border border-none lg:my-0 my-3 bg-[#000] rounded-md text-white"
                                        style={{
                                            padding: "0px",
                                            fontWeight: "bold",
                                            width: "180px",
                                            height: "40px",
                                        }}
                                    >
                                        Show Explanation
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
