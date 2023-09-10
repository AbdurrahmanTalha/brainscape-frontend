import PrimaryBtn from "../../../components/ui/PrimaryBtn";

async function getData(id: string) {
    const res = await fetch(`https://brainscape-backend.vercel.app/api/v1/course/${id}`);
    console.log(res);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const page = async ({ params }: { params: { id: string } }) => {
    const data = await getData(params.id);

    const { title, description, image } = data.data;
    console.log(title);

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
                <svg xmlns={image} style={svgStyle} viewBox="0 0 1440 300" fill="none">
                    <path d="M0 0H1440V300H0V0Z" fill="#E5E5E5" />
                    <path d="M0.5 0.5H1439.5V299.5H0.5V0.5Z" stroke="black" strokeOpacity="0.3" />
                </svg>
            </div>
            <div className="lg:flex justify-between lg:text-left text-center px-[30px] py-[50px]">
                <div>
                    <h1 className="font-bold text-[24px] text-white">{title}</h1>
                    <p className="font-normal text-base course-details-p py-[20px] lg:w-1/2">{description}</p>
                    <PrimaryBtn
                        padding="11px 10px 47px"
                        fontWeight="bold"
                        name="Join Course"
                        width="180px"
                        height="40px"
                    />
                </div>
                <div className="lg:mr-[154px] mt-[20px]">
                    <div>
                        <div className="flex items-center gap-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="33"
                                viewBox="0 0 28 33"
                                fill="none"
                            >
                                <path
                                    d="M5.32292 0.818361C4.24375 0.160744 2.8875 0.139064 1.78646 0.753322C0.685417 1.36758 0 2.52383 0 3.78125V29.2188C0 30.4762 0.685417 31.6324 1.78646 32.2467C2.8875 32.8609 4.24375 32.832 5.32292 32.1816L26.3229 19.4629C27.3656 18.8342 28 17.7141 28 16.5C28 15.2859 27.3656 14.173 26.3229 13.5371L5.32292 0.818361Z"
                                    fill="#9D77EE"
                                />
                            </svg>
                            <h1 className="text-white font-bold text-[20px]">Introduction To Math</h1>
                        </div>
                        <ul className="list-disc ">
                            <li className="py-[10px] ml-14">What is math</li>
                            <li className="py-[10px] ml-14">What is math</li>
                            <li className="py-[10px] ml-14">What is math</li>
                        </ul>
                    </div>
                    <div className=" mt-[20px]">
                        <div>
                            <h1 className="text-white font-bold text-[20px]">Introduction To Math</h1>
                        </div>
                        <ul className="list-disc ">
                            <li className="py-[10px] ml-14">What is math</li>
                            <li className="py-[10px] ml-14">What is math</li>
                            <li className="py-[10px] ml-14">What is math</li>
                        </ul>
                    </div>
                    <div className=" mt-[20px]">
                        <div>
                            <h1 className="text-white font-bold text-[20px]">Introduction To Math</h1>
                        </div>
                        <ul className="list-disc ">
                            <li className="py-[10px] ml-14">What is math</li>
                            <li className="py-[10px] ml-14">What is math</li>
                            <li className="py-[10px] ml-14">What is math</li>
                        </ul>
                    </div>
                    <div className=" mt-[20px]">
                        <div>
                            <h1 className="text-white font-bold text-[20px]">Introduction To Math</h1>
                        </div>
                        <ul className="list-disc ">
                            <li className="py-[10px] ml-14">What is math</li>
                            <li className="py-[10px] ml-14">What is math</li>
                            <li className="py-[10px] ml-14">What is math</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
