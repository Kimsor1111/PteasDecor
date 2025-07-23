const PaymentMethod = ({ name, img, number }) => {
  return (
    <div className="mt-3">
      <h1 className="text-[#353535] text-[14px]">{name}</h1>
      <div className="px-5 py-2 border-[#0B0B0B] text-[#4B4B4B] mt-3 border rounded-full flex gap-3 items-center w-fit">
        <img src={img} alt="" className="size-[40px] grayscale-100" />
        <p className="text-[#525252] text-[16px] tracking-widest">{number}</p>
      </div>
    </div>
  );
};

export default PaymentMethod;
