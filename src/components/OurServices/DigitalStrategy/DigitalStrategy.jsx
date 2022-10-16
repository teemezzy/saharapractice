import { digital } from "../../../assets"
import PopUpDigital from "./PopUpDigital"
const DigitalSrategy = () => {
  return (
    <div className="div lg:w-[34%] relative">
                <img className=' peer ease-in transition-all duration-700   m-auto lg object-fit ' src={digital} alt="" />
                <PopUpDigital />
        </div>
  )
}

export default DigitalSrategy