import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import SecendryBtn from "../SecendryBtn";

const Banner = () => {
    return (
        <>
            <div className="lg:flex flex-row-reverse justify-center items-start  mx-10">
                <div className="bg-white mt-10 lg:mt-0 lg:w-[651px] h-[500px]"></div>
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
