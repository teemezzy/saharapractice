import {  investmentReadiness } from "../../../assets"
import PopUpInvestmentReadiness from "./PopUpInvestmentReadiness"

const InvestmentReadiness = () => {
    return (
        <div className="div lg:w-[34%] m-auto relative">
            <img className=' peer ease-in transition-all duration-700 object-fit m-auto  lg:m-auto ' src={investmentReadiness} alt="" />
            <PopUpInvestmentReadiness />
        </div>
    )
}

export default InvestmentReadiness