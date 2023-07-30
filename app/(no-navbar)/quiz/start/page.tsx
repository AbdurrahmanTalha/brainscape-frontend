import Image from "next/image";
import img from "@/public/Rectangle.png";
import PrimaryBtn from "../../../components/ui/PrimaryBtn";

const QuizStartPage = () => {
    return (
        <main className="relative">
            <div className="top-0 left-0 md:mt-10 lg:mt-10 flex items-center gap-2 md:absolute">
                <button>
                    <p className="text-[24px] mb-10 font-bold text-[#FFFFFF]"> {"<"} Back</p>{" "}
                </button>
            </div>
            <div className="grid items-center gap-5 md:grid-cols-2">
                <div className="ml-3 ">
                    <h2 className="text-[#FFFFFF] text-[24px] md:text-[40px] font-bold">How to read Equations</h2>
                    <p className="text-[#a7a7a7] mb-5 max-w-[450px]">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
                        for previewing layouts and visual mockups.
                    </p>
                    <PrimaryBtn padding="13px 24px" fontWeight="bold" name="Start Lesson" width="150px" height="50px" />
                </div>
                <Image
                    sizes="90vw"
                    style={{
                        width: "100%",
                        height: "100vh",
                    }}
                    src={img}
                    alt=""
                />
            </div>
        </main>
    );
};

export default QuizStartPage;
