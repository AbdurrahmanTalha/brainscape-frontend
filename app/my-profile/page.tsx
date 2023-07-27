import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import SecondaryBtn from "../components/ui/SecondaryBtn";

const page = () => {
    return (
        <div className="max-w-[1250px] lg:h-[806px] mx-auto border-2 border-[#9D77EE] rounded-lg my-7 flex lg:flex-row flex-col gap-24 p-10">
            <div className="flex flex-col justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="176" height="176" viewBox="0 0 176 176" fill="none">
                    <circle cx="88" cy="88" r="88" fill="#D9D9D9" />
                </svg>
                <p className="mt-5  text-white lg:text-2xl text-xl font-bold">John Doe</p>
            </div>
            <div className="w-full lg:mx-16">
                <div className="flex justify-between items-start w-full">
                    <h1 className="text-white font-bold lg:text-2xl text-xl">Personal Info</h1>
                    <FontAwesomeIcon className="w-6 h-6 text-white cursor-pointer" icon={faPenToSquare} />
                </div>
                <div className="border-2 border-[#9D77EE] rounded-lg mt-2 p-7">
                    <div className="flex lg:flex-row md:flex-row  flex-col justify-start items-start gap-5">
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">First Name</h2>
                            <p className="mt-1 text-sm">Md</p>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">Middle Name</h2>
                            <p className="mt-1 text-sm">John</p>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">Last Name</h2>
                            <p className="mt-1 text-sm">Doe</p>
                        </div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col justify-between items-start gap-5 mt-5">
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">Email</h2>
                            <p className="mt-1 text-sm">johndoe@gmail.com</p>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">Password</h2>
                            <p className="mt-1 text-sm">************</p>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">Contact</h2>
                            <p className="mt-1 text-sm">johndoe@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="mt-14 flex flex-wrap items-center lg:gap-10 gap-5">
                <PrimaryBtn name="DELETE ACCOUNT" padding="" fontWeight="700px" width="233px" height="50px"/>
                <SecondaryBtn name="LOGOUT" padding="" fontWeight="700px" width="155px" height="50px"/>
                </div>
            </div>
        </div>
    );
};

export default page;
