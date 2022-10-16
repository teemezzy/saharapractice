import React from 'react'
import { strategy,benchmark, analysis, scale } from '../assets'

const WhatWeDo = () => {
    return (
        <div className=' bg-[#F3F4F6] pt-[86px] pb-[85px] lg:pt-[135px] lg:pb-[224px]'>
            <div className="lg:w-[90%] text-[#231F20] text-center m-auto ">
                <p className='lg:font-extrabold font-bold text-[32px] lg:text-[40px] '>What We Do</p>
                <p className='py-[40px] lg:py-[80px] w-[95%] lg:w-[575px] m-auto text-[20px]'>We help fast-moving innovators strategize, benchmark, analyze trends, and scale with
                    purpose by doing the difficult things that matter.</p>

                <div className="lg:flex w-[95%] lg:justify-between m-auto">
                    <img className='object-fit lg:w-[25%] m-auto lg:m-0' src={strategy} alt="" />
                    <img className='object-fit lg:w-[25%] m-auto lg:m-0' src={benchmark} alt="" />
                    <img className='object-fit lg:w-[25%] m-auto lg:m-0' src={analysis} alt="" />
                    <img className='object-fit lg:w-[25%] m-auto lg:m-0' src={scale} alt="" />

                </div>

            </div>

        </div>
    )
}

export default WhatWeDo