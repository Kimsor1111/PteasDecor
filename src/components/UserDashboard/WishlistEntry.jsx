import {
  faShoppingBag,
  faTrash,
  faWarning,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
const WishlistEntry = ({
  id,
  img,
  name,
  price,
  stock,
  remove,
  len,
  discount,
  addtocart,
}) => {
  const { cartItems } = useSelector((state) => state.cart);
  const InCart = cartItems.find((item) => item.id == id);
  console.log("Incart: ", InCart);
  return (
    <div
      className={`${
        len ? "rounded-b-[11px]" : null
      } w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-3 py-7 border-2 border-t-0 border-[#DEDFE1] `}
    >
      <div className="flex items-center gap-2 ps-[10px] md:ps-[20px]">
        <img src={img} className="md:size-[70px] size-[40px]" alt={id} />
        <p className=" text-[#3D3D3D] md:block hidden">{name}</p>
      </div>
      <p className="text-[#3D3D3D] text-[12px] md:text-[15px]">
        ${(price * (1 - discount / 100)).toFixed(2)}
      </p>
      <p className="text-[12px] md:text-[15px] text-[#6A6A6A]">{stock}</p>
      <p className="text-center">
        <FontAwesomeIcon
          onClick={remove}
          icon={faTrash}
          className="text-white text-[12px] bg-red-500 p-2 rounded md:text-[18px] cursor-pointer"
        />
      </p>
      <p className="text-center">
        <FontAwesomeIcon
          onClick={InCart || stock === 0 ? null : addtocart}
          icon={InCart ? faCheck : stock === 0 ? faWarning : faShoppingBag}
          className={`text-white text-[12px] ${
            InCart
              ? "bg-green-500 cursor-pointer"
              : stock === 0
              ? "bg-orange-500 cursor-not-allowed"
              : "bg-green-500 cursor-pointer"
          } p-2 rounded md:text-[18px] `}
        />
      </p>
    </div>
  );
};

export default WishlistEntry;
