"use client";

import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import SecendryBtn from "./SecendryBtn";

const Navbar = () => {
    return (
        <>
            {/* <nav className="flex justify-between items-center p-[35px]">
                <h1 className="font-bold text-[24px] text-white">Brainscape</h1>
                <div className="flex items-center gap-7">
                    <PrimaryBtn padding="13px 24px" fontWeight="bold" name="Register" width="120px" height="50px" />
                    <SecendryBtn padding="13px 35px" fontWeight="bold" name="Login" width="120px" height="50px" />
                </div>
            </nav> */}
            <div className="navbar p-[35px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box"
                        >
                            <div className="lg:flex items-center gap-7">
                                <PrimaryBtn
                                    padding="13px 24px"
                                    fontWeight="bold"
                                    name="Register"
                                    width="120px"
                                    height="50px"
                                />
                                <SecendryBtn
                                    padding="13px 35px"
                                    fontWeight="bold"
                                    name="Login"
                                    width="120px"
                                    height="50px"
                                />
                            </div>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-[24px] text-white">Brainscape</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="flex items-center gap-7">
                            <PrimaryBtn
                                padding="13px 24px"
                                fontWeight="bold"
                                name="Register"
                                width="120px"
                                height="50px"
                            />
                            <SecendryBtn
                                padding="13px 35px"
                                fontWeight="bold"
                                name="Login"
                                width="120px"
                                height="50px"
                            />
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
