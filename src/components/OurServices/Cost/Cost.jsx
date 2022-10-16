import React from 'react'
import { cost } from '../../../assets'
import PopUpCost from './PopUpCost'
const Cost = () => {
  return (
    <div className="div lg:w-[34%] relative">
          <img className=' peer m-auto lg object-fit ' src={cost} alt="" />
          <PopUpCost />
        </div>
  )
}

export default Cost