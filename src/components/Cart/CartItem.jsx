import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CartItem = ({name, price, qty, imgsrc, discount}) => {
    const finalPrice = (price - price*discount/100).toFixed(2);
  return (
    <main className="grid grid-cols-[2fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] gap-3 w-full py-5 px-4 border-t border-gray-300">
        <div className="flex gap-4 items-center">
            <FontAwesomeIcon className="text-gray-600 text-[12px] hover:cursor-pointer" icon={faX}/>
            <img className="w-[50px] h-[50px] rounded-sm border border-gray-400" src={imgsrc} alt="name" />
            <span className="hidden md:block text-[16px] md:text-[18px]">{name}</span>
        </div>
        <h1 className="w-full flex items-center justify-center text-[14px] md:text-[16px]">${finalPrice}</h1>
        <div className="flex items-center justify-center w-full">
            <h1 className="w-[95%] md:w-[80%] lg:w-[90%] xl:w-[80%] rounded-full border border-gray-500 py-1 md:py-2 flex justify-center items-center gap-1 md:gap-4 lg:gap-2 xl:gap-3 text-[13px] md:text-[15px]">
                <FontAwesomeIcon className="hover:cursor-pointer" icon={faMinus}/>
                {qty}
                <FontAwesomeIcon className="hover:cursor-pointer" icon={faPlus}/>
            </h1>
        </div>
        <h1 className="w-full flex justify-center items-center text-[14px] md:text-[16px]">${finalPrice*qty}</h1>
    </main>
  )
}

export default CartItem