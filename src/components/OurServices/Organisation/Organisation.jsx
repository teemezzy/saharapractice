import React from 'react'
// import PopUpManagement from './PopUpOrganisation'
import { revenue } from '../../../assets'
import PopUpOrganisation from './PopUpOrganisation'

const Management = () => {
    return (

            <div className="div lg:w-[34%]  relative">
                <img className=' peer ease-in transition-all duration-700   m-auto lg object-fit ' src={revenue} alt="" />
                <PopUpOrganisation />
        </div>
    )
}

export default Management