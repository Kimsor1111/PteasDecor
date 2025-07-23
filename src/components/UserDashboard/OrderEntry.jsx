import Product from "./../../assets/Product/p1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faExternalLink,
  faX,
} from "@fortawesome/free-solid-svg-icons";
const OrderEntry = ({ status }) => {
  return (
    <div
      className={`w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center md:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-3 ${
        status == "Failed" && "rounded-b-xl"
      } py-7 border-2 border-t-0 border-[#CECECE]`}
    >
      <p className="ps-[10px] md:ps-[20px] font-bold text-[#6A6A6A]">2103</p>
      <div className="flex items-center gap-2">
        <img src={Product} className="md:size-[70px] size-[40px]" alt="" />
        <p className=" text-[#3D3D3D] md:block hidden">Double Bed & Dressing</p>
      </div>
      <div
        className={`${
          status == "In Progress"
            ? "bg-orange-500"
            : status == "Succeed"
            ? "bg-green-500"
            : "bg-red-500"
        } text-white font-bold w-fit py-1 px-2 flex gap-2 text-sm items-center rounded`}
      >
        <FontAwesomeIcon
          icon={
            status == "In Progress"
              ? faClock
              : status == "Succeed"
              ? faCheck
              : faX
          }
        />
        <p className="text-[10px] md:block hidden">{status}</p>
      </div>
      <div className="text-[8px] md:text-[12px] hover:underline flex cursor-pointer text-[#6A6A6A]">
        <p>2176413876</p>
        <p className="hidden md:block ps-2">
          <FontAwesomeIcon icon={faExternalLink} />
        </p>
      </div>
      <p className="text-[8px] md:text-[12px] text-[#6A6A6A]">23-07-2021</p>
      <p className="text-[8px] md:text-[12px] text-[#6A6A6A]">$168.20</p>
    </div>
  );
};

export default OrderEntry;
