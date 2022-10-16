import React from 'react';

function PopUpCost({ visiblePopUp, onClosePopUp }) {

    return (

        <div className='fixed hidden text-white peer-hover:flex ease-in lg:w-[100%] w-[100%] p-5 lg:h-[335px] hover:bg-[#231F20]  bg-[#231F20]   transition-all duration-700 hover:flex border top-0 absolute   shadow-md rounded-[10px]  z-50
         flex justify-center items-center'>
            <div className=" lg:w-[263px] m-auto transition-all duration-700   text-center w-[344px] h-[335px] rounded-lg ">
                <img className='m-auto' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1665787358/Sahara%20Practice/Cost_thicok.png" alt="" />
                <h2 className='font-bold text-[24px] py-[12px]'>Cost Reduction</h2>
                <p className='text-[14px]' >We help you drive growth by identifying partners to recruit or further develop, foster
                    stronger relationships and deliver data-driven insights for improved results.
                    We redefine a unique hiring process that saves you time and resources with better
                    lifetime value to your venture.

                </p>
            </div>
        </div>
    );
}

export default PopUpCost;