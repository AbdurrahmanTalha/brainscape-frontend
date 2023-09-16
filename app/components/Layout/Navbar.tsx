"use client";
import PrimaryBtn from "../ui/PrimaryBtn";
import SecondaryBtn from "../ui/SecondaryBtn";
import DashboardNav from "./DashboardNav";
import Link from "next/link";
import { useAppSelector } from "@/app/redux/hook";

const Navbar = () => {
    const user = useAppSelector(state => state.auth.value);
    console.log(user);

    return (
        <>
            {user.token ? (
                <DashboardNav />
            ) : (
                <div className="container navbar">
                    <div className="navbar-start">
                        <Link href="/" className="normal-case text-[24px] text-white font-bold">
                            Brainscape
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end dropdown-bottom">
                            <label tabIndex={0} className="text-white btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
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
                                <div className="items-center lg:flex gap-7">
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
                        <ul className="hidden px-1 menu menu-horizontal lg:flex">
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
