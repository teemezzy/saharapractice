import React from 'react';

function PopUpInnovation() {

    return (

        <div className='fixed hidden text-white peer-hover:flex ease-in lg:w-[100%] w-[100%] p-5 lg:h-[335px] hover:bg-[#231F20]  bg-[#231F20]   transition-all duration-700 hover:flex border top-0 absolute   shadow-md rounded-[10px]  z-50
         flex justify-center items-center'>
            <div className=" lg:w-[263px] m-auto transition-all duration-700   text-center w-[344px] h-[335px] rounded-lg ">
                <img className='m-auto'
                    src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1665787392/Sahara%20Practice/innovation_tqhobq.png" alt="" />
                <h2 className='font-bold text-[24px] py-[12px]'>Innovation</h2>
                <p className='text-[14px]' >Innovation is a continuous process. We enable you to stay ahead of the curve by
                    designing and building your next landmark and product.
                </p>
            </div>
        </div>
    );
}

export default PopUpInnovation;