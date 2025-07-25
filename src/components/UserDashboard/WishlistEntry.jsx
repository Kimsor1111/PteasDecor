import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "./../../assets/Product/p1.jpg";
const OrderEntry = ({ status }) => {
  return (
    <div
      className={`w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-3 ${
        status == "Failed" && "rounded-b-xl"
      } py-7 border-2 border-t-0 border-[#CECECE]`}
    >
      <div className="flex items-center gap-2 ps-[20px]">
        <img src={Product} className="md:size-[70px] size-[40px]" alt="" />
        <p className=" text-[#3D3D3D] md:block hidden">Double Bed & Dressing</p>
      </div>
      <p className="text-[#3D3D3D] text-[12px] md:text-[15px]">123.45$</p>
      <p className="text-[12px] md:text-[15px] text-[#6A6A6A]">10</p>
      <p className="text-center">
        <FontAwesomeIcon
          icon={faTrash}
          className="text-red-500 text-[12px] md:text-[18px] cursor-pointer"
        />
      </p>
      <p className="text-center">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-[#3a3838] text-[12px] md:text-[18px] cursor-pointer"
        />
      </p>
    </div>
  );
};

export default OrderEntry;
