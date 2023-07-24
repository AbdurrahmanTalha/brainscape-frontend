import React from 'react';

const page = () => {
    return (
        <section className='flex h-[608px] w-[1218px] mx-auto mt-16'>
        <div className='w-1/2'></div>
        <div className='w-1/2 flex justify-center items-center  bg-[#171320]'>
           <div className='w-4/5 mx-auto'>
           <h3 className='text-4xl font-bold text-center mb-12'>Register</h3>
            <div className=' w-full '>
              <p className='font-medium mb-1 '>Email</p> 
              <input type="text" placeholder="Email" className="input rounded-1 border-2 border-[#9D77EE]  w-full " />
            </div>
            <div className=' w-full mt-7'>
              <p className='font-medium mb-1'>Password</p> 
              <input type="text" placeholder="Password" className="input rounded-1 border-2 border-[#9D77EE]  w-full" />
              <div className='flex justify-between text-lg font-normal mt-1'>
              <label className='text-[#ffffffa6]' >Forget Password?</label>
              <label className='text-[#ffffffa6]'>Don’t have a account?</label>
              </div>
            </div>
            <button className='w-full bg-[#9D77EE] rounded-md h-11 mt-3 font-bold	text-xl'>Log in</button>
           </div>
        </div>
    </section>
    );
};

export default page;