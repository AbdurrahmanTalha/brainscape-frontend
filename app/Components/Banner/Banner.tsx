import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import SecendryBtn from "../SecendryBtn";

const Banner = () => {
    return (
        <>
            <div className="lg:flex flex-row-reverse justify-center mt-[90px] items-start  mx-10">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="651" height="523" viewBox="0 0 651 523" fill="none">
                        <path d="M0 0H651V523H0V0Z" fill="#E5E5E5" />
                        <path d="M0.5 0.5H650.5V522.5H0.5V0.5Z" stroke="black" strokeOpacity="0.3" />
                    </svg>
                </div>
                <div>
                    <h1 className="font-bold text-[40px] mt-10 lg:mt-20 text-white">
                        The Interactive and fun way of learning!
                    </h1>
                    <p className="py-[30px]">
                        Lorem ipsum dolor sit amet. Id dolor totam aut aperiam cumque sit officia perspiciatis. Hic quis
                        exercitationem aut officia voluptas
                    </p>
                    <div className="flex items-center gap-7">
                        <PrimaryBtn padding="13px 24px" fontWeight="bold" name="Register" width="120px" height="50px" />
                        <SecendryBtn padding="13px 35px" fontWeight="bold" name="Login" width="120px" height="50px" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
