'use client'
import { faFloppyDisk, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import SecondaryBtn from "../components/ui/SecondaryBtn";

const page = () => {
    const [editing, setEditing] = useState(false);
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
                    <button onClick={()=>setEditing(!editing)}>

                  {editing ? <FontAwesomeIcon className="w-6 h-6 text-white " icon={faFloppyDisk} /> : <FontAwesomeIcon  className="w-6 h-6 text-white" icon={faPenToSquare} />}
                    </button>
                </div>
              {!editing &&  <div className="border-2 border-[#9D77EE] rounded-lg mt-2 p-7">
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
                            <p className="mt-1 text-sm">9346945369</p>
                        </div>
                    </div>
                </div>}
                {editing && <div className="border-2 border-[#9D77EE] rounded-lg mt-2 p-7">
                    <div className="flex lg:flex-row md:flex-row  flex-col justify-start items-start gap-5">
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">First Name</h2>
                            <input
                                    type="text"
                                   defaultValue={"Md"}
                                    className="mt-1 input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium h-[40px]"
                                />
                       
                        </div>
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">Middle Name</h2>
                            <input
                                    type="text"
                                   defaultValue={"John"}
                                    className="mt-1 input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium h-[40px]"
                                />
                        </div>
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">Last Name</h2>
                            <input
                                    type="text"
                                   defaultValue={"Doe"}
                                    className="mt-1 input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium h-[40px]"
                                />
                        </div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col justify-between items-start gap-5 mt-5">
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">Email</h2>
                            <p className="mt-1 text-sm">johndoe@gmail.com</p>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">Password</h2>
                            <input
                                    type="password"
                                   defaultValue={"************"}
                                    className="mt-1 input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium h-[40px]"
                                />
                         
                        </div>
                        <div className="lg:w-1/3 md:w-1/3">
                            <h2 className="text-white font-bold text-base">Contact</h2>
                            <input
                                    type="text"
                                   defaultValue={"9346945369"}
                                    className="mt-1 input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium h-[40px]"
                                />
                           
                        </div>
                    </div>
                </div>}
                <div className="mt-14 flex flex-wrap items-center lg:gap-10 gap-5">
                <PrimaryBtn name="DELETE ACCOUNT" padding="" fontWeight="700px" width="233px" height="50px"/>
                <SecondaryBtn name="LOGOUT" padding="" fontWeight="700px" width="155px" height="50px"/>
                </div>
            </div>
        </div>
    );
};

export default page;
