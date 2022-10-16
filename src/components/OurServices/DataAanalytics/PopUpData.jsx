import React from 'react';

function PopUpData() {

    return (

        <div className='fixed hidden text-white peer-hover:flex ease-in lg:w-[100%] w-[100%] p-5 lg:h-[335px] hover:bg-[#231F20]  bg-[#231F20]   transition-all duration-700 hover:flex border top-0 absolute   shadow-md rounded-[10px]  z-50
         flex justify-center items-center'>
            <div className=" lg:w-[263px] m-auto transition-all duration-700   text-center w-[344px] h-[335px] rounded-lg ">
                <img className='m-auto' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1665787370/Sahara%20Practice/Data_tvry5q.png" alt="" />
                <h2 className='font-bold text-[24px] py-[12px]'>Data Analytics</h2>
                <p className='text-[14px]' >Do you want to understand what your data is saying? We take your raw data, analyze
                    and process it into simply comprehensible infographics to help you optimize and better
                    position your business.



                </p>
            </div>
        </div>
    );
}

export default PopUpData;