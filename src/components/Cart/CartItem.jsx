import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ name, price, qty, imgsrc, discount }) => {
  const finalPrice = (price - (price * discount) / 100).toFixed(2);
  return (
    <main className="grid grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] gap-3 w-full py-5 px-4 border-t border-gray-300">
      <div className="flex items-center gap-4">
        <FontAwesomeIcon
          className="text-[10px] md:text-[12px] hover:cursor-pointer"
          icon={faX}
        />
        <img
          className="md:size-[50px] size-[40px] rounded-sm border border-gray-400"
          src={imgsrc}
          alt="name"
        />
        <p className="hidden md:block text-[16px] text-[#3D3D3D]">{name}</p>
      </div>
      <h1 className="w-full flex items-center justify-center text-[14px] md:text-[16px] text-[#949494]">
        ${finalPrice}
      </h1>
      <div className="flex items-center justify-center w-full">
        <h1 className="md:w-[80%] lg:w-[90%] xl:w-[80%] rounded-full border border-[#D7D7D7] text-[#414141 ] py-1 px-2 md:py-2 flex justify-between items-center gap-[6px] md:gap-4 lg:gap-2 xl:gap-3 text-[13px] md:text-[15px]">
          <FontAwesomeIcon className="hover:cursor-pointer" icon={faMinus} />
          {qty}
          <FontAwesomeIcon className="hover:cursor-pointer" icon={faPlus} />
        </h1>
      </div>
      <h1 className="w-full flex justify-center items-center text-[14px] md:text-[16px] text-[#949494]">
        ${(finalPrice * qty).toFixed(2)}
      </h1>
    </main>
  );
};

export default CartItem;
