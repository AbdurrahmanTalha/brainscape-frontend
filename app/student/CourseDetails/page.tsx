import React from "react";
import PrimaryBtn from "../../components/ui/PrimaryBtn";

const page = () => {
    // Add some CSS styles to the page to ensure the SVG fills the entire viewport
    const pageStyle = {
        margin: 0,
        padding: 0,
        overflow: "hidden", // Hide any potential scrollbars
    };

    // Add styles to the SVG to make it responsive and fill the screen
    const svgStyle = {
        width: "100%",
        height: "100%",
    };

    return (
        <>
            <div style={pageStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} viewBox="0 0 1440 300" fill="none">
                    <path d="M0 0H1440V300H0V0Z" fill="#E5E5E5" />
                    <path d="M0.5 0.5H1439.5V299.5H0.5V0.5Z" stroke="black" strokeOpacity="0.3" />
                </svg>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-[30px] py-[50px]">
                <div>
                    <h1 className="font-bold text-[24px] text-white">Course Details</h1>
                    <p className="font-normal text-base course-details-p py-[20px]">
                        asdasdas das dasd asdas asdasdas d asdasdasd sdasd asdd asdasdasdasdasd asdad asdasdas asdasdsd
                        asdad asdasdasd asdadasdas dasdas dasd asdasdasd asdasdasdad
                    </p>
                    <PrimaryBtn
                        padding="11px 10px 47px"
                        fontWeight="bold"
                        name="Join Course"
                        width="180px"
                        height="40px"
                    />
                </div>
                <div></div>
            </div>
        </>
    );
};

export default page;
