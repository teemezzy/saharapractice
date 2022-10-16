import { customerRelation, innovation } from "../../../assets"
import PopUpCustomerRelation from "./PopUpCustomerRelation"
const CustomerRelation= () => {
    return (
        <div className="div lg:w-[34%] relative">
            <img className=' peer ease-in transition-all duration-700   m-auto lg object-fit ' src={customerRelation} alt="" />
            <PopUpCustomerRelation />
        </div>
    )
}

export default CustomerRelation