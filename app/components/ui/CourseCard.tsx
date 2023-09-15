import { ICourse } from "@/app/interfaces/course";
import Image from "next/image";
import React from "react";

const CourseCard = ({ course }: { course: ICourse }) => {
    return (
        <div>
            <h2 className="text-[24px] font-semibold text-white mt-[30px]">{course.category}</h2>
            <div className="">
                <div className="w-[375px] h-[340px] bg-[#050505] border-2 border-[#9D77EE] mt-[20px] rounded-[10px] px-[30px]">
                    <Image src={course.image} alt="" width={120} height={120} className="mx-auto mt-[25px]" />
                    <h2 className="font-bold text-[24px] text-white mt-[30px]">{course.title}</h2>
                    <p className="w-[320px] text-[#FFFFFF65]">{course.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
