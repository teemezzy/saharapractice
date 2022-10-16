// import BG from '../assets/BG.png'
import {rwanda,nigeria,kenya, southafrica,ghana} from '../assets'


import './Hero.css'

const HeroSection = () => {
  return (
    <div className='mt-[112px] text-center space-y-[56px] py-[94px] lg:py-[118px] hero lg:h-[954px]'>
      <p className='font-bold w-[95%] lg:w-[67.25%] text-[40px] lg:text-[56px] m-auto lg:leading-[66px] '>We handle the complex side of things, so you can focus on the big picture.</p>
      <p className=' w-[95%] leading-[26px]  lg:text-[20px] m-auto lg:w-[40.8%]  '> <span className='font-bold'>Tech Companies Disrupt:</span> <br />
        We pride ourselves in establishing the building blocks that aid the development and
        success of your businesses.</p>
      <button className='bg-[#FC9500] hover:bg-[#18181B] hover:text-[#FC9500] transition duration-500 ease-in w-[289px] rounded-[20px] h-[56px] ' >Get Started</button>
      <div className='lg:pt-[40px]  justify-between w-[70%] lg:w-[630px] flex m-auto '>
        <img className='w-[34px] h-[34px] lg:w-[75.35px] lg:h-[75.35px] ' src={rwanda} alt="" />
        <img className='w-[34px] h-[34px] lg:w-[75.35px] lg:h-[75.35px] ' src={kenya} alt="" />
        <img className='w-[34px] h-[34px] lg:w-[75.35px] lg:h-[75.35px] ' src={ghana} alt="" />
        <img className='w-[34px] h-[34px] lg:w-[75.35px] lg:h-[75.35px] ' src={nigeria} alt="" />
        <img className='w-[34px] h-[34px] lg:w-[75.35px] lg:h-[75.35px] ' src={southafrica} alt="" />
      </div>

    </div>
  )
}

export default HeroSection