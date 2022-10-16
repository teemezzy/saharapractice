import React from 'react'
import PopUpData from './PopUpData'
import { dataAnalytics } from '../../../assets'
const DataAnalytics = () => {
    return (
        <div className="div lg:w-[34%] relative">
            <img className='object-fit peer m-auto lg:m-0 ' src={dataAnalytics} alt="" />
            <PopUpData />
        </div>
    )
}

export default DataAnalytics