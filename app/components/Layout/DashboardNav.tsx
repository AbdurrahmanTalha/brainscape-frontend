"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

const DashboardNav = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="container">
            <div className="flex items-center justify-between py-3 ">
                <span className="flex items-center gap-2 md:hidden">
                    {toggle ? (
                        <FontAwesomeIcon onClick={() => setToggle(!toggle)} icon={faCircleXmark} />
                    ) : (
                        <FontAwesomeIcon onClick={() => setToggle(!toggle)} icon={faBars} />
                    )}
                    <div className="flex items-center gap-2">
                        <Link href="/student">
                            <h2 className="text-[24px] text-[#fafafa] font-bold ">Brainscape</h2>
                        </Link>
                    </div>
                </span>
                <div className="items-center hidden gap-2 lg:md:flex">
                    <Link href="/student">
                        <h2 className="text-2xl font-bold text-[#fafafa]">Brainscape</h2>
                    </Link>
                </div>

                <ul
                    className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-white top-20 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-6 absolute md:static z-50 ${
                        toggle ? "left-0" : "-left-full"
                    }`}
                >
                    <li className="">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="">
                        <Link href="/student/all-courses">Courses</Link>
                    </li>
                </ul>
                <Link href="/my-profile">
                    <Image
                        className="object-cover w-12 h-12 rounded-full"
                        width={100}
                        height={100}
                        src="https://i.ibb.co/vsC46pf/bw.jpg"
                        alt=""
                    />
                </Link>
            </div>
        </nav>
    );
};

export default DashboardNav;
