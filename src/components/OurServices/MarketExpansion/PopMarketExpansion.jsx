import React from 'react';

function PopUpMarketExpansion() {

    return (

        <div className='fixed hidden peer-hover:flex ease-in lg:w-[100%] w-[100%] lg:h-[335px] hover:bg-white  bg-white   transition-all duration-700 hover:flex border top-0 absolute   shadow-md rounded-[10px]  z-50
         flex justify-center items-center'>
            <div className=" lg:w-[263px] m-auto transition-all duration-700   text-center w-[344px] h-[335px] rounded-lg ">
                <img className='m-auto' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1665787353/Sahara%20Practice/marketing_nmm6wo.png" alt="" />
                <h2 className='font-bold text-[24px] py-[12px]'>Market Expansion</h2>
                <p className='text-[14px]' >We advise your vertical and horizontal market expansion. We also help you incorporate
                    your business, open a bank account, and become tax compliant and regulatorycompliant where needed.
                </p>
            </div>
        </div>
    );
}

export default PopUpMarketExpansion;