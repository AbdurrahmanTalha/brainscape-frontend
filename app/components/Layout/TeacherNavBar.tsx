import Image from "next/image";
import person from "../../../public/Ellipse 2.png";

const TeacherNavBar = () => {
    return (
        <nav className="container my-3">
            <div className="flex items-center justify-between ">
                <h2 className="md:text-[32px] text-[24px] font-bold text-[#FFFFFF]">BRAINSCAPE</h2>
                <div>
                    <div className="flex items-center space-x-4">
                        <div>
                            <Image src={person} alt="" title="John Doe" />
                        </div>
                        <div className="hidden md:block">
                            <p className="text-[#FFFFFF] font-bold">John Doe</p>
                            <p>johndoe@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TeacherNavBar;
