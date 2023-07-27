import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "@/public/logic-HzWHci.png";
import Image from "next/image";
// import DashboardNav from "@/app/components/Layout/DashboardNav";

export default function AllCourses() {
    return (
        <div>
            <DashboardNav />
            <div className="mt-[50px] container">
                <div className="w-[70%] h-[60px] mx-auto border-2 border-[#9D77EE] rounded-full flex items-center pl-[30px]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[20px] text-[#9D77EE]"></FontAwesomeIcon>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[90%]  ml-[10px] bg-none bg-transparent border-none outline-none placeholder:font-semibold placeholder:text-white"
                    />
                </div>
                <div className="mt-[25px]">
                    <h2 className="text-[24px] font-semibold text-center text-white">Browse Courses</h2>
                    <p className="mt-[15px] text-center text-[#FFFFFF65]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis.
                    </p>
                    <div className="flex justify-center items-center mt-[15px]">
                        <div className="text-[#fff] h-[40px] border-2 border-[#9D77EE] flex justify-center items-center rounded-[10px] p-[10px] mr-[30px] bg-[#9D77EE]">
                            Computer Science
                        </div>
                        <div className="text-[#fff] h-[40px] border-2 border-[#9D77EE] flex justify-center items-center rounded-[10px] p-[10px]">
                            Math
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-[24px] font-semibold text-white mt-[30px]">Category</h2>
                <div className="">
                    <div className="w-[375px] h-[340px] bg-[#050505] border-2 border-[#9D77EE] mt-[20px] rounded-[10px] px-[30px]">
                        <Image src={img} alt="" width={120} height={120} className="mx-auto mt-[25px]" />
                        <h2 className="font-bold text-[24px] text-white mt-[30px]">Logic</h2>
                        <p className="w-[320px] text-[#FFFFFF65]">
                            lorem as asd asda sdasdas dasd asdsa asdasd asdasdsadadad sadasdasdasdasdasd asdsdsdsdsdsds
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
