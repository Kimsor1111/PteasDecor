import { Link } from "react-router-dom";

const ProductCard = ({ id, img, discount, price, name }) => {
  return (
    <Link to={`/Products/ProductDetail/${id}`} className="relative">
      {discount > 0 && (
        <span className="absolute top-2 left-3 bg-[#3D3D3D] text-[11px] text-white px-3 tracking-wider rounded-md py-[2px]">
          -{discount}%
        </span>
      )}
      <div className="bg-[#E8E8E8] rounded-2xl">
        <img src={img} alt="" className="mb-2 rounded-2xl" />
      </div>
      <div className="flex flex-col justify-center gap-2 px-2 my-5">
        <h1 className="md:text-[18px] text-[14px] text-[#404040] w-full md:text-center">
          {name}
        </h1>
        <div className="flex justify-between items-center gap-2">
          <span className="md:text-sm text-[13px]">
            <p>
              {discount > 0 && (
                <del className="mr-1 text-[#404040]">
                  ${price}
                </del>
              )}
              ${(price - (price * discount) / 100).toFixed(2)}
            </p>
          </span>
          <span className="rounded-full border-[1px] border-black w-[20px] h-[20px] md:w-[25px] md:h-[25px] flex justify-center items-center pb-[3.5px] pr-[0.3px] cursor-pointer">
            +
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
