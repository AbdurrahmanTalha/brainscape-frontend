import Image from "next/image";
import React from "react";
import { FaUpload } from "react-icons/fa";
import img from '/public/men.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
const page = () => {
    return (
        <section className="flex lg:flex-row flex-col h-[608px] lg:w-[1218px] w-4/5 mx-auto mt-16 lg:gap-0 gap-5">
            <div className='lg:w-1/2'>
                <Image src={img} width={800} height={1600} alt='talha'/>
            </div>
            <div className="lg:w-1/2 flex lg:flex-row flex-col justify-center items-center  bg-[#171320]">
                <div className="w-4/5 mx-auto py-10">
                    <h3 className="text-4xl font-bold text-center mb-12 text-white">Register</h3>
                    <div className="flex lg:flex-row flex-col justify-between lg:gap-9">
                        <div>
                            <div className=" w-full mb-7">
                                <p className="font-medium mb-1 text-white ">First Name</p>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium "
                                />
                            </div>
                            <div className=" w-full mb-7">
                                <p className="font-medium mb-1 text-white ">Last Name</p>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium "
                                />
                            </div>
                            <div className=" w-full mb-7">
                                <p className="font-medium mb-1 text-white ">Email</p>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium"
                                />
                            </div>
                        </div>
                        <div>
                            <div className=" w-full ">
                                <p className="font-medium mb-1 text-white">Middle Name</p>
                                <input
                                    type="text"
                                    placeholder="Middle Name"
                                    className="input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium"
                                />
                            </div>
                            <div className=" w-4/5 mt-7">
                                <p className="font-medium mb-1 text-white text-sm">Upload Profile picture</p>
                                <label className="custom-file-input-label">
                                    <input type="file" className=" hidden"  />
                                    <div className="flex justify-start gap-2 items-center px-4 py-2 cursor-pointer input rounded-md border-2 border-[#9D77EE] text-xs font-medium">
                                      
                                      <FontAwesomeIcon  className="text-white w-5 h-5" icon={faUpload} />
                                      Upload Profile
                                      </div>
                                </label>
                            </div>
                            <div className=" w-full mt-7">
                                <p className="font-medium mb-1 text-white">Password</p>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input rounded-md border-2 border-[#9D77EE]  w-full text-xs font-medium"
                                />
                                <p className="mt-2 text-sm text-end cursor-pointer">Already Have an account?</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-[#9D77EE] rounded-md text-white h-11 mt-3 font-bold	text-xl">
                        Register
                    </button>
                </div>
            </div>
        </section>
    );
};

export default page;
