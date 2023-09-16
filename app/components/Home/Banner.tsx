import React from "react";
import PrimaryBtn from "../ui/PrimaryBtn";
import SecondaryBtn from "../ui/SecondaryBtn";
import Link from "next/link";

const Banner = () => {
    return (
        <>
            <div className="lg:flex flex-row-reverse justify-between mt-[90px] items-center mx-10 container">
                <div style={{ width: "100%", maxWidth: "650px" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 651 523"
                        fill="none"
                        style={{ width: "100%", height: "auto" }}
                    >
                        <path d="M0 0H651V523H0V0Z" fill="#E5E5E5" />
                        <path d="M0.5 0.5H650.5V522.5H0.5V0.5Z" stroke="black" strokeOpacity="0.3" />
                    </svg>
                </div>
                <div>
                    <h1 className="font-bold text-[40px] mt-10 lg:mt-20 text-white">
                        The Interactive and fun way of learning!
                    </h1>
                    <p className="py-[30px] max-w-[500px]">
                        Lorem ipsum dolor sit amet. Id dolor totam aut aperiam cumque sit officia perspiciatis. Hic quis
                        exercitationem aut officia voluptas
                    </p>
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
                </div>
            </div>
        </>
    );
};

export default Banner;
