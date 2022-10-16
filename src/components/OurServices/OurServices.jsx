import React from 'react'
import PopUpManagement from './Management/PopUpManagement'
import PopUpCost from './Cost/PopUpCost'
import { artificailInteligence, cost, customerRelation, dataAnalytics, digital, innovation, investmentReadiness, management, marketExpansion, marketing, operations, organisation, revenue } from '../../assets'
import { Cost, Management, Innovation, CustomerRelation,InvestmentReadiness,RevenueGrowth, Marketing, MarketExpansion, DataAnalytics, DigitalSrategy, Organistion, Operations, ArtificialIntelligence } from './index'
const OurServices = () => {
  return (
    <div id='services' className='lg:py-[140px] py-[56px] bg-[#F3F4F6] space-y-7'>
      <h1 className=' lg:pb-[88px] pb-[74px] font-bold text-center text-[30px] lg:text-[40px]'>Our Services</h1>
      <div className=" space-y-2 lg:space-y-0 lg:flex w-[70%] m-auto justify-between ">
        <Management />
        <Cost />
        <Marketing />
      </div>

      <div className=" space-y-2 lg:space-y-0 lg:flex w-[70%] m-auto justify-between ">
        <DataAnalytics />
        <DigitalSrategy />
        <Innovation />
      </div>

      <div className=" space-y-2 lg:space-y-0 lg:flex w-[70%] m-auto justify-between ">
        <Organistion />
        <RevenueGrowth />
        <Operations />
      </div>

      <div className=" space-y-2 lg:space-y-0 lg:flex w-[70%] m-auto justify-between ">
        <CustomerRelation />
        <MarketExpansion />
        <ArtificialIntelligence />
      </div>

      <div className=" lg:flex   w-[75%] m-auto justify-between ">
        <InvestmentReadiness />
      </div>




    </div>
  )
}

export default OurServices