import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: any;
    title: string;
    description: string;
    _id: string;
}

export default function CourseCard({ img, title, description, _id }: props) {
    return (
        <Link href={`/student/course/${_id}`}>
            <div className="w-[375px] h-[340px] bg-[#050505] border-2 border-[#9D77EE] mt-[20px] rounded-[10px] px-[30px]">
                <Image src={img} alt="" width={120} height={120} className="mx-auto mt-[25px]" />
                <h2 className="font-bold text-[24px] text-white mt-[30px]">{title}</h2>
                <p className="w-[320px] text-[#FFFFFF65]">{description}</p>
            </div>
        </Link>
    );
}
