"use client";
import React, { useEffect, useState } from "react";
import PrimaryBtn from "../ui/PrimaryBtn";
import SecondaryBtn from "../ui/SecondaryBtn";
import DashboardNav from "./DashboardNav";
import Link from "next/link";

const Navbar = () => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = window.localStorage.getItem("token");
        setToken(storedToken);
    }, []);
    return (
        <>
            {token ? (
                <DashboardNav />
            ) : (
                <div className="navbar container">
                    <div className="navbar-start">
                        <Link href="/" className="normal-case text-[24px] text-white font-bold">
                            Brainscape
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end dropdown-bottom">
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
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
                            >
                                <div className="lg:flex items-center gap-7">
                                    <Link href="/register">
                                        <PrimaryBtn
                                            padding="13px 24px"
                                            fontWeight="bold"
                                            name="Register"
                                            width="120px"
                                            height="50px"
                                        />
                                    </Link>
                                    <Link href="/login">
                                        <SecondaryBtn
                                            padding="13px 35px"
                                            fontWeight="bold"
                                            name="Login"
                                            width="120px"
                                            height="50px"
                                        />
                                    </Link>
                                </div>
                            </ul>
                        </div>
                        <ul className="menu menu-horizontal px-1 hidden lg:flex">
                            <div className="flex items-center gap-7">
                                <Link href="/register">
                                    <PrimaryBtn
                                        padding="13px 24px"
                                        fontWeight="bold"
                                        name="Register"
                                        width="120px"
                                        height="50px"
                                    />
                                </Link>
                                <Link href="/login">
                                    <SecondaryBtn
                                        padding="13px 35px"
                                        fontWeight="bold"
                                        name="Login"
                                        width="120px"
                                        height="50px"
                                    />
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
