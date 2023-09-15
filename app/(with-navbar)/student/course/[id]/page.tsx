"use client";
import PrimaryBtn from "@/app/components/ui/PrimaryBtn";
import { ISection } from "@/app/interfaces/course";
import { IQuiz } from "@/app/interfaces/quiz";
import { useJoinCourseMutation } from "@/app/redux/feature/course/courseApiSlice";

async function getData(id: string) {
    const res = await fetch(`http://localhost:5000/api/v1/course/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const page = async ({ params }: { params: { id: string } }) => {
    const data = await getData(params.id);
    const { category, description, image, sections } = data.data;
    const [joinCourse] = useJoinCourseMutation();

    const pageStyle = {
        margin: 0,
        padding: 0,
        overflow: "hidden",
    };

    const svgStyle = {
        width: "100%",
        height: "100%",
    };

    return (
        <>
            <div style={pageStyle}>
                <svg xmlns={image} style={svgStyle} viewBox="0 0 1440 300" fill="none">
                    <path d="M0 0H1440V300H0V0Z" fill="#E5E5E5" />
                    <path d="M0.5 0.5H1439.5V299.5H0.5V0.5Z" stroke="black" strokeOpacity="0.3" />
                </svg>
            </div>
            <div className="lg:flex justify-between lg:text-left text-center px-[30px] py-[50px]">
                <div>
                    <h1 className="font-bold text-[24px] text-white">{category}</h1>
                    <p className="font-normal text-base course-details-p py-[20px] lg:w-1/2">{description}</p>
                    <div onClick={() => joinCourse({ userId: "", courseId: "" })}>
                        <PrimaryBtn padding="15px" fontWeight="bold" name="Join Course" width="180px" height="auto" />
                    </div>
                </div>
                <div className="mt-[20px]">
                    {sections.map((section: ISection) => {
                        return (
                            <div className="w-[auto] min-w-[210px]" key={section._id}>
                                <div className="flex items-center gap-5">
                                    <h1 className="text-white font-bold text-[20px]">{section.section}</h1>
                                </div>
                                <ul className="list-disc">
                                    {section.quiz.map((quiz: IQuiz) => {
                                        return (
                                            <li className="py-[10px] ml-14" key={quiz._id}>
                                                {quiz.title}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default page;
