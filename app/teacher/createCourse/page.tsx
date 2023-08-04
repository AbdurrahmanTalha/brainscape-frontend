import Image from "next/image";
import React from "react";
import img from "@/public/Rectangle.png";
import PrimaryBtn from "@/app/components/ui/PrimaryBtn";

const page = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-between items-center gap-5 lg:mt-3 mt-2">
            <div className="lg:w-1/2 lg:py-0 py-10">
                <h1 className="text-white font-bold text-3xl mb-4">CREATE A COURSE</h1>
                <div className="w-full">
                    <p className="font-medium mb-1 text-white text-sm">Name</p>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input rounded-md border-2 text-[#ffffffa6] text-xs font-medium border-[#9D77EE]  w-3/4 "
                    />
                </div>
                <p className="my-3 text-base">PLEASE SELECT A NAME CAREFULLY</p>
                <PrimaryBtn padding="" fontWeight="bold" name="Create Course" width="195px" height="50px" />
            </div>
            <div className="lg:w-1/2">
                <Image
                    style={{
                        width: "100%",
                        height: "90vh",
                    }}
                    src={img}
                    alt=""
                />
            </div>
        </div>
    );
};

export default page;
