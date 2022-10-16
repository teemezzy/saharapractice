import React from 'react';

function PopUpOperations({ visiblePopUp, onClosePopUp }) {

    return (

        <div className='fixed hidden peer-hover:flex ease-in lg:w-[100%] w-[100%] m-auto lg:m-0 p-5 lg:h-[335px] hover:bg-white  bg-white hover:flex border top-0 left-0  absolute   shadow-md rounded-[10px]  z-50
         flex justify-center items-center'>
            <div className=" lg:w-[263px] m-auto transition-all duration-700   text-center w-[344px] h-[335px] rounded-lg ">
                <img className='m-auto' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1665787452/Sahara%20Practice/operations_mxakz1.png" alt="" />
                <h2 className='font-bold text-[24px] py-[12px]'>Operation</h2>
                <p className='text-[14px]' >We optimize your operating model and implementation of digital capabilities that would
                    eliminate waste, improve efficiency and save money.
                </p>
            </div>
        </div>
    );
}

export default PopUpOperations;