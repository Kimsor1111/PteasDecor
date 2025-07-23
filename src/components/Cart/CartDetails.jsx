import CartDetailsItem from "./CartDetailsItem";
import img from "./../../assets/Product/p1.jpg";
const CartDetails = () => {
  const carts = [
    {
      id: 1,
      name: "Double Bed & Dressing",
      price: 180,
      discount: 13,
      qty: 1,
      imgsrc: img,
    },
    {
      id: 2,
      name: "Double Bed & Dressing",
      price: 180,
      discount: 13,
      qty: 1,
      imgsrc: img,
    },
    {
      id: 3,
      name: "Double Bed & Dressing",
      price: 180,
      discount: 13,
      qty: 1,
      imgsrc: img,
    },
    {
      id: 4,
      name: "Double Bed & Dressing",
      price: 180,
      discount: 13,
      qty: 1,
      imgsrc: img,
    },
  ];
  const subtotal = carts.reduce(
    (acc, item) =>
      (acc +=
        item.qty * item.price - (item.qty * item.price * item.discount) / 100),
    0
  );
  const shipping = 100;
  const total = subtotal + shipping;
  return (
    <aside className="w-full h-fit rounded-xl flex flex-col font-oxygen font-[400] text-[#3D3D3D] text-[16px]">
      <h1 className="py-5 bg-[#20263E] rounded-t-[11px] text-white ps-5 md:ps-[40px] lg:ps-5 text-[20px] font-poppins">
        Cart Details
      </h1>
      <div className="flex flex-col w-full px-5 border-2 border-[#DEDFE1] rounded-b-[11px]">
        <div className="grid grid-cols-[2fr_1fr_1fr] border-b-2 border-dashed border-[#949494] text-[#3D3D3D] py-5">
          <h1>Product</h1>
          <h1 className="flex justify-center">Quantity</h1>
          <h1 className="flex justify-end">SUBTOTAL</h1>
        </div>
        <div className="flex flex-col gap-2 text-[#949494] text-sm font-oxygen py-5 border-b-2 border-dashed border[#949494]">
          {carts.map(({ id, name, qty, price, discount }) => (
            <CartDetailsItem
              key={id}
              name={name}
              qty={qty}
              price={price}
              discount={discount}
            />
          ))}
        </div>
        <div className="flex justify-between py-5 border-b-2 border-dashed border-[#949494]">
          <h1 className="text-[#3D3D3D]">Subtotal</h1>
          <span className="text-[#949494] text-sm">$ {subtotal}</span>
        </div>
        <div className="flex justify-between py-5 border-b-2 border-dashed border-[#949494]">
          <h1 className="text-[#3D3D3D]">Shipping</h1>
          <span className="text-[#949494] text-sm">$ {shipping}</span>
        </div>
        <div className="flex justify-between py-5">
          <h1 className="text-[#3D3D3D]">Total</h1>
          <span className="text-[#949494] text-sm">$ {total}</span>
        </div>
      </div>
    </aside>
  );
};

export default CartDetails;
