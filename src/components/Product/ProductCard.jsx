import { Link, useNavigate } from "react-router-dom";
const ProductCard = ({ id, name, price, discount, stock, img }) => {
  const navigate = useNavigate();
  return (
    <Link
      to={`/Products/ProductDetail/${name.replace(/\s+/g, "-")}`}
      onClick={(e) => {
        e.preventDefault();
        navigate(`/Products/ProductDetail/${name.replace(/\s+/g, "-")}`, {
          state: { productid: id },
        });
      }}
      className="relative cursor-pointer font-oxygen"
    >
      {discount > 0 && (
        <span className="absolute top-2 left-3 bg-[#3D3D3D] text-[11px] text-white px-3 tracking-wider rounded-md py-[2px]">
          -{discount}%
        </span>
      )}
      <div className="bg-[#E8E8E8] rounded-2xl">
        <img src={img} alt="" className=" mb-2 rounded-2xl" />
      </div>
      <div className="flex flex-col justify-center gap-2 px-2 my-5">
        <h1 className="md:text-[18px] text-[14px] text-[#404040] w-full md:text-center">
          {name}
        </h1>
        <div>
          <span className="md:text-sm flex gap-2 items-center text-[11px]">
            <p>
              {discount > 0 && (
                <del className="mr-1 text-[#404040]">${price.toFixed(2)}</del>
              )}
              ${(price - (price * discount) / 100).toFixed(2)}
            </p>
            {stock == 0 && (
              <p className="text-[#42424299] text-[11px]">(Sold Out)</p>
            )}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
