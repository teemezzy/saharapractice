import { innovation } from "../../../assets"
import PopUpInnovation from "./PopUpInnovation"
const Innovation = () => {
    return (
        <div className="div lg:w-[34%] relative">
            <img className=' peer ease-in transition-all duration-700   m-auto lg object-fit ' src={innovation} alt="" />
            <PopUpInnovation />
        </div>
    )
}

export default Innovation