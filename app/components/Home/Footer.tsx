import React from "react";

const Footer = () => {
    return (
        <>
            <div className="lg:flex justify-between border border-none p-5 items-center text-white container">
                <div className="flex justify-center items-center lg:flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="191" height="191" viewBox="0 0 191 191" fill="none">
                        <circle cx="95.5" cy="95.5" r="95.5" fill="#D9D9D9" />
                    </svg>
                </div>
                <div className="lg:flex lg:px-0 px-[100px] text-left items-center gap-[190px] ">
                    <div className="pt-[58px]">
                        <h1>Category</h1>
                        <ul className="pt-[19px]">
                            <li>Link</li>
                            <li className="py-2">Link</li>
                            <li>Link</li>
                            <li className="py-2">Link</li>
                        </ul>
                    </div>
                    <div className="mr-[228px] pt-[58px]">
                        <h1>Category</h1>
                        <ul className="pt-[19px]">
                            <li>Link</li>
                            <li className="py-2">Link</li>
                            <li>Link</li>
                            <li className="py-2">Link</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-white px-[100px] lg:flex text-left justify-around mt-[64px] items-center">
                <p>Privacy Policy</p>
                <p className="py-2">Privacy Policy</p>
                <p>Privacy Policy</p>
                <p className="py-2">Privacy Policy</p>
            </div>
        </>
    );
};

export default Footer;
