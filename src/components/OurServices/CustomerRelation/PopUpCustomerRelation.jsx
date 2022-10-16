import React from 'react';

function PopUpCustomerRelation() {

    return (

        <div className='fixed hidden text-white peer-hover:flex ease-in lg:w-[100%] w-[100%] p-5 lg:h-[335px] hover:bg-[#231F20]  bg-[#231F20]   transition-all duration-700 hover:flex border top-0 absolute   shadow-md rounded-[10px]  z-50
         flex justify-center items-center'>
            <div className=" lg:w-[263px] m-auto transition-all duration-700   text-center w-[344px] h-[335px] rounded-lg ">
                <img className='m-auto'
                    src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1665787440/Sahara%20Practice/customer_qubqxj.png" alt="" />
                <h2 className='font-bold text-[24px] py-[12px]'>Customer Relation</h2>
                <p className='text-[14px]' >we help you define and implement digital experiences that take your customer relations
                    a notch higher. We also help you optimize for web3 and the 4th Industrial Revolution.
                </p>
            </div>
        </div>
    );
}

export default PopUpCustomerRelation;