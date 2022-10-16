import React from 'react'
import { blockchain, cloud, cyberSecurity, dataServices, education, financial, healthcare, hospitality, insurance, itServices, legal, logistics, retail, saas, web3 } from '../assets'

const SectorsWeFocusOn = () => {
    return (
        <div className='lg:pt-[131px] pt-[88px] pb-[48px] lg:pb-[204px] space-y-2 text-center  '>

            <h1 className='font-bold text-[40px] w-[60%] m-auto lg:w-[100%] '>Sectors We Focus On</h1>
            <p className='lg:text-[32px] w-[80%] m-auto text-[20px] py-[26px] lg:py-[80px] '>We focus on serving IT companies and startups in;</p>
            <div className=" space-y-2 lg:space-y-0 lg:flex lg:w-[65%] m-auto justify-between ">
                <img className='object-fit m-auto lg:m-0 lg:w-[18.5%]' src={education} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[26%]' src={financial} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[15%]' src={legal} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[18%]' src={insurance} alt="" />
            </div>
            <div className=" space-y-2 lg:space-y-0 lg:flex lg:w-[65%] m-auto justify-between ">
                <img className='object-fit m-auto lg:m-0 lg:w-[27%]' src={retail} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[19%]' src={hospitality} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[20%]' src={healthcare} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[22%]' src={dataServices} alt="" />
            </div>

            <div className=" space-y-2 lg:space-y-0 lg:flex lg:w-[65%] m-auto justify-between ">
                <img className='object-fit m-auto lg:m-0 lg:w-[14.8%]' src={web3} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[14.4%]' src={saas} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[15.8%]' src={cloud} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[20%]' src={blockchain} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[17.6%]' src={logistics} alt="" />
            </div>
            <div className=" space-y-2 lg:space-y-0 lg:flex lg:w-[30%] m-auto justify-between ">
                <img className='object-fit m-auto lg:m-0 lg:w-[48%]' src={itServices} alt="" />
                <img className='object-fit m-auto lg:m-0 lg:w-[48%]' src={cyberSecurity} alt="" />
            </div>
        </div>
    )
}

export default SectorsWeFocusOn