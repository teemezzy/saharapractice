import PopUpMarketing from "./PopUp"
import { marketing } from "../../../assets"
const Marketing = () => {
  return (
    <div className="div lg:w-[34%] relative">
                <img className=' peer ease-in transition-all duration-700   m-auto lg object-fit ' src={marketing} alt="" />
                <PopUpMarketing />
        </div>
  )
}

export default Marketing