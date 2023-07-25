import React from "react";
import Hero2o from "./Hero2o";

const Hero2 = () => {
    return (
        <>
            <h1 className="text-center text-white font-bold text-[40px] mt-[63px]">
                Master concepts in 15 minutes a day
            </h1>
            <p className="text-white text-center">
                Lorem ipsum dolor sit amet. Id dolor totam aut aperiam <br /> cumque sit officia perspiciatis. Hic quis
                exercitationem aut o
            </p>
            <div className="lg:flex gap-[56px] mt-[63px] justify-center items-center  mx-10">
                <div className="bg-white mt-10 lg:mt-0 lg:w-[50.68%] h-[523px]"></div>
                <div>
                    <h1 className="font-bold text-[40px] lg:mt-0 mt-[60px] text-white">
                        The Interactive and fun way of learning!
                    </h1>
                    <p className="py-[30px]">
                        Lorem ipsum dolor sit amet. Id dolor totam aut aperiam cumque sit officia perspiciatis. Hic quis
                        exercitationem aut officia voluptas
                    </p>
                </div>
            </div>
            <Hero2o></Hero2o>
        </>
    );
};

export default Hero2;
