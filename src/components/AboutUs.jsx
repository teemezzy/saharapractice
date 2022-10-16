import React from 'react'
import { africa } from '../assets'

const Aboutus = () => {
    return (
        <div id='about-us' className='bg-gray-900 lg:h-[945px] text-[#FEFCFD] py-[54px] lg:py-[135px] '>
            <div className=" lg:w-[88%] m-auto ">
                <p className='text-center font-extrabold text-[32px] lg:text-[40px]'>About Us</p>
                <div className="flex justify-between lg:pt-[80px] ">
                    <div className="lg:w-[50%] lg:text-start text-center w-[95%] m-auto lg:m-0 space-y-[24px]">
                        <p className='text-[32px]'>We are your Sahara Partners and African experts.</p>
                        <p className='lg:text-[20px] '>We are a formidable team of carefully selected creative geniuses strategically
                            positioned in South Africa, Kenya, Nigeria, Ghana, and Rwanda. Avengers in the true
                            sense of the word.</p>
                        <p className='lg:text-[20px] '> We bring unique advice to businesses with deep understanding to help them explore
                            new markets in Africa and drive consumer insight approaches, brand knowledge, and
                            strategies. </p>

                        <p className='lg:text-[20px] '>   We deliver razor-sharp results because we are Ninja. </p>
                    </div>
                    <img className='lg:block hidden' src={africa} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Aboutus