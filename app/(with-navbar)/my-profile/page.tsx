"use client";
import { faFloppyDisk, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PrimaryBtn from "../../components/ui/PrimaryBtn";
import SecondaryBtn from "../../components/ui/SecondaryBtn";
import Link from "next/link";

const page = () => {
    const [editing, setEditing] = useState(false);

    return (
        <div className="max-w-[1250px] lg:h-[806px] mx-auto border-2 border-[#9D77EE] rounded-lg my-7 flex lg:flex-row flex-col gap-24 p-10">
            <div className="flex flex-col items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="176" height="176" viewBox="0 0 176 176" fill="none">
                    <circle cx="88" cy="88" r="88" fill="#D9D9D9" />
                </svg>
                <p className="mt-5 text-xl font-bold text-white lg:text-2xl">John Doe</p>
            </div>
            <div className="w-full lg:mx-16">
                <div className="flex items-start justify-between w-full">
                    <h1 className="text-xl font-bold text-white lg:text-2xl">Personal Info</h1>
                    <button onClick={() => setEditing(!editing)}>
                        {editing ? (
                            <FontAwesomeIcon className="w-6 h-6 text-white " icon={faFloppyDisk} />
                        ) : (
                            <FontAwesomeIcon className="w-6 h-6 text-white" icon={faPenToSquare} />
                        )}
                    </button>
                </div>
                {!editing && (
                    <div className="border-2 border-[#9D77EE] rounded-lg mt-2 p-7">
                        <div className="flex flex-col items-start justify-start gap-5 lg:flex-row md:flex-row">
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">First Name</h2>
                                <p className="mt-1 text-sm">Md</p>
                            </div>
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">Middle Name</h2>
                                <p className="mt-1 text-sm">John</p>
                            </div>
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">Last Name</h2>
                                <p className="mt-1 text-sm">Doe</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-5 mt-5 lg:flex-row md:flex-row">
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">Email</h2>
                                <p className="mt-1 text-sm">johndoe@gmail.com</p>
                            </div>
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">Password</h2>
                                <p className="mt-1 text-sm">************</p>
                            </div>
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">Contact</h2>
                                <p className="mt-1 text-sm">9346945369</p>
                            </div>
                        </div>
                    </div>
                )}
                {editing && (
                    <div className="border-2 border-[#9D77EE] rounded-lg mt-2 p-7">
                        <div className="flex flex-col items-start justify-start gap-5 lg:flex-row md:flex-row">
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">First Name</h2>
                                <input
                                    type="text"
                                    defaultValue={"Md"}
                                    className="mt-1 input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium h-[40px]"
                                />
                            </div>
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">Middle Name</h2>
                                <input
                                    type="text"
                                    defaultValue={"John"}
                                    className="mt-1 input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium h-[40px]"
                                />
                            </div>
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">Last Name</h2>
                                <input
                                    type="text"
                                    defaultValue={"Doe"}
                                    className="mt-1 input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium h-[40px]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-5 mt-5 lg:flex-row md:flex-row">
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">Email</h2>
                                <p className="mt-1 text-sm">johndoe@gmail.com</p>
                            </div>
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">Password</h2>
                                <input
                                    type="password"
                                    defaultValue={"************"}
                                    className="mt-1 input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium h-[40px]"
                                />
                            </div>
                            <div className="lg:w-1/3 md:w-1/3">
                                <h2 className="text-base font-bold text-white">Contact</h2>
                                <input
                                    type="text"
                                    defaultValue={"9346945369"}
                                    className="mt-1 input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium h-[40px]"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex flex-wrap items-center gap-5 mt-14 lg:gap-10">
                    <PrimaryBtn name="DELETE ACCOUNT" padding="" fontWeight="bold" width="200px" height="50px" />
                    <Link href="/login">
                        <SecondaryBtn name="LOGOUT" padding="" fontWeight="bold" width="155px" height="50px" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;
