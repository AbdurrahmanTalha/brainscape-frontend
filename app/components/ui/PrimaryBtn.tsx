/* eslint-disable react/prop-types */
import React from "react";
interface IPrimaryBtn {
    name: string;
    padding: string;
    fontWeight: string;
    width: string;
    height: string;
}
const PrimaryBtn = ({ name, padding, fontWeight, width, height }: IPrimaryBtn) => {
    return (
        <div>
            <button
                className="border text-center border-none bg-[#E34A6B] rounded-md text-white"
                style={{
                    padding: padding,
                    fontWeight: fontWeight,
                    width: width,
                    height: height,
                }}
            >
                {name}
            </button>
        </div>
    );
};

export default PrimaryBtn;
