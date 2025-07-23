import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const SuccessPayment = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] fixed py-[60px] rounded-xl top-1/2 -translate-1/2 left-1/2 z-20 bg-white flex flex-col items-center justify-center gap-6 font-oxygen">
        <FontAwesomeIcon className="text-[50px] text-green-500" icon={faCheckCircle}/>
        <h1 className="text-[35px] font-medium">Thank you!</h1>
        <span className="w-[80%] md:w-[40%] text-center text-gray-600/80">Your order has been confirmed & It is on the way. Check your email for the details</span>
        <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to='/' className="rounded-full px-3 py-2 border border-black bg-black hover:bg-black/90 active:bg-black/80 text-white font-poppins">Go to Homepage</Link>
            <Link className="rounded-full px-3 py-2 border border-black hover:bg-gray-100 active:bg-gray-200 font-poppins">Check Order Details</Link>
        </div>
    </div>
  )
}

export default SuccessPayment