const ProductCard = ({ img, discount, price, name }) => {
  return (
    <div className="relative">
      {discount > 0 && (
        <span className="absolute top-2 left-3 bg-[#3D3D3D] text-[12px] text-white px-2 rounded-md py-[1px]">
          -{discount}%
        </span>
      )}
      <div className="bg-[#E8E8E8] rounded-2xl">
        <img src={img} alt="" className="mb-2 rounded-2xl" />
      </div>
      <div className="flex flex-col justify-center gap-2 px-2">
        <h1 className="text-[18px] font-oxygen text-[#404040] w-full text-center">
          {name}
        </h1>
        <div className="flex justify-between items-center gap-2">
          <span>
            <p>
              {discount > 0 && (
                <del className="mr-1 text-[#404040]">
                  ${(price - (price * discount) / 100).toFixed(2)}
                </del>
              )}
              ${price}
            </p>
          </span>
          <span className="rounded-full border-[1px] border-black w-[25px] h-[25px] flex justify-center items-center pb-[3.5px] pr-[0.3px] cursor-pointer">
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
