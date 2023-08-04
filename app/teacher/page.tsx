"use client";
import React from "react";
import Chart from "../components/Dashboard/teacher/Chart";

const TeacherDashboardPage = () => {
    return (
        <main className="container mb-10">
            <div className="md:w-[1290px] px-3  mt-10 mx-auto border border-[#9D77EE] rounded-md">
                <section className="mx-auto md:py-5 md:px-10">
                    <div>
                        <h2 className="md:text-[24px] text-[18px] font-bold text-[#FFFFFF] pt-3">OVERVIEW</h2>
                        <p>Aa adas das asdsads dasdsd sdd sss</p>
                    </div>
                    <div className="justify-between md:flex">
                        <div className="md:w-[600px] rounded-md h-[230px] border-2 border-[#9D77EE] mt-10  py-3">
                            <p className="text-[#FFFFFF] px-5">
                                Amount of people who joined your course in the last week
                            </p>
                            <Chart />
                        </div>
                        <div className="md:w-[572px] h-[230px] border-r-2 border-t-2 border-b-2 rounded-md md:border-l-0 border-l-2 border-[#9D77EE] mt-10 px-5 py-3 md:mr-6">
                            <p className="text-[#FFFFFF]">Course last Updated At</p>
                            <p className="text-[#FFFFFF] text-[24px] mt-10">MARCH 31, 2028</p>
                        </div>
                    </div>
                </section>
                <section className="py-5 my-5 md:px-10">
                    <div className="md:w-[1160px] h-[390px] border border-[#9D77EE] ">
                        <div className="overflow-x-auto">
                            <table className="table text-center">
                                {/* head */}
                                <thead className="border-b-2 border-[#9D77EE]">
                                    <tr className="text-[#FFFFFF]">
                                        <th>Course Name</th>
                                        <th>Created At</th>
                                        <th>Amount of Lessons</th>
                                        <th>Amount of Users Enroller</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="text-[#FFFFFF]">
                                        <th>Mathmatics and its core conepts</th>
                                        <td>1930, March</td>
                                        <td>92</td>
                                        <td>500,00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default TeacherDashboardPage;
