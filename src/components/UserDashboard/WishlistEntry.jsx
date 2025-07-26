import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const WishlistEntry = ({ img, name, price, stock }) => {
  return (
    <div
      className={`w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-3 py-7 border-2 border-t-0 border-[#CECECE]`}
    >
      <div className="flex items-center gap-2 ps-[10px] md:ps-[20px]">
        <img src={img} className="md:size-[70px] size-[40px]" alt="" />
        <p className=" text-[#3D3D3D] md:block hidden">{name}</p>
      </div>
      <p className="text-[#3D3D3D] text-[12px] md:text-[15px]">{price}$</p>
      <p className="text-[12px] md:text-[15px] text-[#6A6A6A]">{stock}</p>
      <p className="text-center">
        <FontAwesomeIcon
          icon={faTrash}
          className="text-white text-[12px] bg-red-500 p-2 rounded md:text-[18px] cursor-pointer"
        />
      </p>
      <p className="text-center">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-white p-2 bg-green-500 rounded  text-[12px] md:text-[18px] cursor-pointer"
        />
      </p>
    </div>
  );
};

export default WishlistEntry;
