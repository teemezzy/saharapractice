import { marketing, operations } from "../../../assets"
import PopUpOperations from "./PopUpOperations"
const Marketing = () => {
  return (
    <div className="div lg:w-[34%] relative">
                <img className=' peer ease-in transition-all duration-700   m-auto lg object-fit ' src={operations} alt="" />
                <PopUpOperations />
        </div>
  )
}

export default Marketing