import React from "react";
import DashboardNav from "../components/ui/DashboardNav";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const StudentDashboardPage = () => {
    return (
        <main>
            <DashboardNav />
            <section className="my-20 ">
                <div className="grid md:w-[1380px] gap-5 md:h-[176px] md:grid-cols-2">
                    
                    <div className="flex md:w-[558px] md:h-[160px] items-center gap-8  ">
                        <Image className="md:w-[160px] rounded-full object-cover md:h-[160px]" width={100} height={100} src="https://i.ibb.co/vsC46pf/bw.jpg" alt="" />
                        <div>
                            <h2 className="text-[24px] text-[#FFFFFF] font-bold">John Doe</h2>
                            <p className="font-medium text-[#FFFFFF]">Solve - amount of problems to continue streak!</p>
                        </div>
                    </div>
                    <div className="border md:w-[600px] md:h-[160px] border-[#171320] p-4">
                        <p className="text-[#FFFFFF] mt-[15px] mb-[20px] ml-[30px] font-bold ">123 Day Win Streak!</p>
                        <div className="grid items-center grid-cols-7 ml-[30px] ">
                            <div>
                                <FontAwesomeIcon className="border border-[#171320] text-[#FFFFFF] rounded-full p-1 mt-3" icon={faCheck} />
                            </div>
                            <div>
                                <FontAwesomeIcon className="border border-[#171320] text-[#FFFFFF] rounded-full p-1 mt-3" icon={faCheck} />
                            </div>
                            <div>
                                <FontAwesomeIcon className="border border-[#171320] text-[#FFFFFF]  rounded-full p-1 mt-3" icon={faCheck} />
                            </div>
                            <div>
                                <FontAwesomeIcon className="border border-[#171320] text-[#FFFFFF] rounded-full p-1 mt-3" icon={faCheck} />
                            </div>
                            <div className="border border-[#171320] w-6 h-6 rounded-full p-1 mt-3">

                            </div>
                            <div className="border border-[#171320] w-6 h-6 rounded-full p-1 mt-3">

                            </div>
                            <div className="border border-[#171320] w-6 h-6 rounded-full p-1 mt-3">

                            </div>
                        </div>
                        <div className="grid items-center grid-cols-7 ml-[30px] text-[#FFFFFF] px-1">
                            <div>
                                <p>M</p>
                            </div>
                            <div className="px-1">
                                <p>T</p>
                            </div>
                            <div>
                                <p>W</p>
                            </div>
                            <div>
                                <p>Th</p>
                            </div>
                            <div className="px-2">
                                <p>F</p>
                            </div>
                            <div>
                                <p>Sat</p>
                            </div>
                            <div className="px-1">
                                <p>Sat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pick up where you left of! */}

            <section className="">
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <h2 className="my-3 text-[24px] font-semibold text-[#FFFFFF]">Pick up where you left of!</h2>
                        <div className="border rounded-md md:h-[509px] border-[#9D77EE] md:w-[600px]">

                        </div>
                    </div>
                    <div>
                        <h2 className="my-3 text-[24px] font-semibold text-[#FFFFFF]">Continue Learning</h2>
                        <div className="border rounded-md md:h-[509px] border-[#9D77EE] md:w-[600px]">

                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended Courses */}

            <section className="mt-10 ">
                <h2 className="mb-3 text-[24px] font-semibold text-[#FFFFFF]">Recommended Courses</h2>
                <div className="grid gap-5 mb-5 md:grid-cols-3">
                    <div className=" hover:scale-95 transform duration-500 p-10 md:w-[410px] md:h-[380px] border border-[#9D77EE] ">
                        <Image className="block object-cover w-40 h-40 mx-auto rounded-full " src="https://i.ibb.co/vsC46pf/bw.jpg" alt="" width={100} height={100} />
                        <p className="text-[#FFFFFF] mt-10 mb-3">30 Quzzes - Something</p>
                        <p className="text-[24px] font-bold text-[#FFFFFF]">Logic</p>
                    </div>
                    <div className=" hover:scale-95 transform duration-500 p-10 md:w-[410px] md:h-[380px] border border-[#9D77EE] ">
                        <Image className="block object-cover w-40 h-40 mx-auto rounded-full h" src="https://i.ibb.co/vsC46pf/bw.jpg" alt="" width={100} height={100} />
                        <p className="text-[#FFFFFF] mt-10 mb-3">30 Quzzes - Something</p>
                        <p className="text-[24px] font-bold text-[#FFFFFF]">Logic</p>
                    </div>
                    <div className=" hover:scale-95 transform duration-500 p-10 md:w-[410px] md:h-[380px] border border-[#9D77EE] ">
                        <Image className="block object-cover w-40 h-40 mx-auto rounded-full h" src="https://i.ibb.co/vsC46pf/bw.jpg" alt="" width={100} height={100} />
                        <p className="text-[#FFFFFF] mt-10 mb-3">30 Quzzes - Something</p>
                        <p className="text-[24px] font-bold text-[#FFFFFF]">Logic</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StudentDashboardPage;