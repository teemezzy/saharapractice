import { innovation } from "../../../assets"
import PopUpRevenueGrowth from "./PopUpRevenueGrowth"
const RevenueGrowth = () => {
    return (
        <div className="div lg:w-[34%] relative">
            <img className=' peer ease-in transition-all duration-700   m-auto lg object-fit ' src={innovation} alt="" />
            <PopUpRevenueGrowth />
        </div>
    )
}

export default RevenueGrowth