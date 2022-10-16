import React from 'react';

function PopUpOrganisation() {

    return (

        <div className='fixed hidden peer-hover:flex ease-in lg:w-[100%] w-[100%] m-auto lg:m-0 p-5 lg:h-[335px] hover:bg-white  bg-white hover:flex border top-0 left-0  absolute   shadow-md rounded-[10px]  z-50
         flex justify-center items-center'>
            <div className=" lg:w-[263px] m-auto transition-all duration-700   text-center w-[344px] h-[335px] rounded-lg ">
                <img className='m-auto' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1665787413/Sahara%20Practice/organisation_fyabto.png" alt="" />
                <h2 className='font-bold text-[24px] py-[12px]'>Organisation</h2>
                <p className='text-[12px]' >We assess your original goals and help you focus on achieving that through the best
                    possible approach. We pay specific attention to your governance and leadership
                    structures. We then accelerate your success, assure the delivery of your goals,
                    highlight the results you can achieve, and bring your critical stakeholders up to speed.

                </p>
            </div>
        </div>
    );
}

export default PopUpOrganisation;