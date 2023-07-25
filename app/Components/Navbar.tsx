"use client";

import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import SecendryBtn from "./SecendryBtn";

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center p-[35px]">
                <h1 className="font-bold text-[24px]">Brainscape</h1>
                <div className="flex items-center gap-7">
                    <PrimaryBtn padding="13px 24px" fontWeight="bold" name="Register" width="120px" height="50px" />
                    <SecendryBtn padding="13px 35px" fontWeight="bold" name="Login" width="120px" height="50px" />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
