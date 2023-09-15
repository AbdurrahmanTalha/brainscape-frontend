"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ICourse } from "../../../interfaces/course";
import CourseCard from "@/app/components/ui/CourseCard";
import { useCoursesQuery } from "@/app/redux/feature/course/courseApiSlice";

export default function AllCourses() {
    const [searchText, setSearchText] = useState("asdad");
    const [searchedCategory, setSearchedCategory] = useState("English");
    const categories = ["Computer Science", "Physics", "English", "Math"];
    const { data } = useCoursesQuery({ searchText, searchedCategory });

    return (
        <div>
            <div className="mt-[50px] container">
                <div className="w-[70%] h-[60px] mx-auto border-2 border-[#9D77EE] rounded-full flex items-center pl-[30px]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[20px] text-[#9D77EE]"></FontAwesomeIcon>
                    <input
                        onChange={e => {
                            setSearchText(e.target.value);
                        }}
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
                        {categories.map((category, i) => (
                            <button
                                onClick={e => {
                                    const target = e.target as HTMLElement;

                                    setSearchedCategory(target.innerText);
                                }}
                                key={i}
                                className="text-[#fff] h-[40px] border-2 border-[#9D77EE] flex justify-center items-center rounded-[10px] p-[10px] mr-[30px] hover:bg-[#9D77EE]"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {data?.data?.map((course: ICourse) => <CourseCard key={course._id} course={course} />)}
        </div>
    );
}
