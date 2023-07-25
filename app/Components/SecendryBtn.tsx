import React from 'react';
interface IprimaryBtn  {name : string, padding : string, fontWeight : string, width : string, height : string}
const SecendryBtn = ({ name, padding, fontWeight, width, height } : IprimaryBtn) => {
   
    return (
        <div>
            <button
                className='border bg-[#171320] rounded-md text-white'
                style={{
                    padding: padding ,
                    fontWeight: fontWeight,
                    width : width,
                    height : height

                }}
            >
                {name}
            </button>
        </div>
    );
};

export default SecendryBtn;