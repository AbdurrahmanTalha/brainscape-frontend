/* eslint-disable react/prop-types */
import React from "react";
interface IprimaryBtn {
    name: string;
    padding: string;
    fontWeight: string;
    width: string;
    height: string;
}
const PrimaryBtn = ({ name, padding, fontWeight, width, height }: IprimaryBtn) => {
    // Define default values for padding and font weight

    return (
        <div>
            <button
                className="border bg-[#E34A6B] rounded-md text-white"
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
