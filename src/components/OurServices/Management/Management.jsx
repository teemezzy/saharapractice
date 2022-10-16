import React from 'react'
import PopUpManagement from './PopUpManagement'
import { management } from '../../../assets'

const Management = () => {
    return (

            <div className="div lg:w-[34%]  relative">
                <img className=' peer hover:ease-in transition-all duration-700   m-auto lg object-fit ' src={management} alt="" />
                <PopUpManagement />
        </div>
    )
}

export default Management