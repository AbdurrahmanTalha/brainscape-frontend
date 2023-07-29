import React from "react";
import DashboardNav from "../components/Layout/DashboardNav";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import img from "@/public/Rectangle.png";
import LearningTable from "../components/Dashboard/LearningTable";
// tests
const StudentDashboardPage = () => {
    const customStyle = {
        "--value": 55,
    } as React.CSSProperties;
    return (
        <main>
            <DashboardNav />
            <section className="my-20 container">
                <div className="grid md:w-full gap-5 md:h-[176px] md:grid-cols-2">
                    <div className="flex md:w-[558px] md:h-[160px] items-center gap-8  ">
                        <Image
                            className="md:w-[160px] rounded-full object-cover md:h-[160px]"
                            width={100}
                            height={100}
                            src="https://i.ibb.co/vsC46pf/bw.jpg"
                            alt=""
                        />
                        <div>
                            <h2 className="text-[24px]  text-[#FFFFFF] font-bold">John Doe</h2>
                            <p className="font-medium md:max-w-[200px] lg:max-w-[500px] text-[#FFFFFF]">
                                Solve - amount of problems to continue streak!
                            </p>
                        </div>
                    </div>
                    <div className="border md:w-full md:h-[160px] border-[#171320] p-4">
                        <p className="text-[#FFFFFF] mt-[15px] mb-[20px] ml-[30px] font-bold ">123 Day Win Streak!</p>
                        <div className="grid items-center grid-cols-7 ml-[30px] ">
                            <div>
                                <FontAwesomeIcon
                                    className="border border-[#171320] text-[#FFFFFF] rounded-full p-1 mt-3"
                                    icon={faCheck}
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    className="border border-[#171320] text-[#FFFFFF] rounded-full p-1 mt-3"
                                    icon={faCheck}
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    className="border border-[#171320] text-[#FFFFFF]  rounded-full p-1 mt-3"
                                    icon={faCheck}
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    className="border border-[#171320] text-[#FFFFFF] rounded-full p-1 mt-3"
                                    icon={faCheck}
                                />
                            </div>
                            <div className="border border-[#171320] w-6 h-6 rounded-full p-1 mt-3"></div>
                            <div className="border border-[#171320] w-6 h-6 rounded-full p-1 mt-3"></div>
                            <div className="border border-[#171320] w-6 h-6 rounded-full p-1 mt-3"></div>
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

            <hr className="border-1 border-[#FFFFFF] max-w-[1240px] mx-auto py-5" />

            {/* Pick up where you left of! */}

            <section>
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <h2 className="my-3 text-[24px] font-semibold text-[#FFFFFF]">Pick up where you left of!</h2>
                        <div className="border rounded-md md:h-[509px] border-[#9D77EE] md:w-full">
                            <Image
                                className="w-full object-cover h-[280px]"
                                width={100}
                                height={100}
                                src={img}
                                alt=""
                            />
                            <h2 className="text-[24px] font-semibold text-[#FFFFFF] mt-5 ml-5">Mathmatics</h2>
                            <div className="flex items-center gap-10 mt-6 mb-5 ml-8">
                                <div className="radial-progress " style={customStyle}>
                                    55%
                                </div>
                                <div>
                                    <h2 className="text-[#FFFFFF] font-semibold md:text-[24px] text-[20px]">
                                        30 Quzzes out of 40
                                    </h2>
                                    <button className="bg-[#171320] px-8 mt-3 mb-3 py-2 text-[#FFFFFF] rounded-md">
                                        Continue lesson
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-0">
                        <h2 className="my-3 text-[24px] font-semibold text-[#FFFFFF]">Continue Learning</h2>
                        <div className="border mr-0 rounded-md md:h-[509px] border-[#9D77EE] md:w-full">
                            <LearningTable />
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended Courses */}

            <section className="mt-10 ">
                <h2 className="mb-3 text-[24px] font-semibold text-[#FFFFFF]">Recommended Courses</h2>
                <div className="grid gap-5 mb-5 md:grid-cols-2 lg:grid-cols-3 ">
                    <div className=" hover:scale-95 transform duration-500 p-10  max-w-[410px] w-auto rounded-md lg:h-[380px] border border-[#9D77EE] ">
                        <Image
                            className="block object-cover w-40 h-40 mx-auto rounded-full "
                            src="https://i.ibb.co/vsC46pf/bw.jpg"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <p className="text-[#FFFFFF] mt-10 mb-3">30 Quzzes - Something</p>
                        <p className="text-[24px] font-bold text-[#FFFFFF]">Logic</p>
                    </div>
                    <div className=" hover:scale-95 transform duration-500 p-10  max-w-[410px] w-auto rounded-md lg:h-[380px] border border-[#9D77EE] ">
                        <Image
                            className="block object-cover w-40 h-40 mx-auto rounded-full h"
                            src="https://i.ibb.co/vsC46pf/bw.jpg"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <p className="text-[#FFFFFF] mt-10 mb-3">30 Quzzes - Something</p>
                        <p className="text-[24px] font-bold text-[#FFFFFF]">Logic</p>
                    </div>
                    <div className=" hover:scale-95 transform duration-500 p-10  max-w-[410px] w-auto rounded-md lg:h-[380px] border border-[#9D77EE]  ">
                        <Image
                            className="block object-cover w-40 h-40 mx-auto rounded-full h"
                            src="https://i.ibb.co/vsC46pf/bw.jpg"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <p className="text-[#FFFFFF] mt-10 mb-3">30 Quzzes - Something</p>
                        <p className="text-[24px] font-bold text-[#FFFFFF]">Logic</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StudentDashboardPage;
