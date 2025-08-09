import CartDetailsItem from "./CartDetailsItem";
import { useSelector } from "react-redux";
const CartDetails = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const subtotal = cartItems.reduce(
    (acc, item) =>
      (acc +=
        item.qty * item.price - (item.qty * item.price * item.discount) / 100),
    0
  );
  const cartPrice = [
    {
      title: "Subtotal",
      price: subtotal,
    },
    {
      title: "Shipping",
      price: cartItems.length == 0 ? 0 : 10,
    },
    {
      title: "Total",
      price: cartItems.length === 0 ? 0 : subtotal + 10,
    },
  ];
  return (
    <aside className="w-full h-fit rounded-xl flex flex-col font-exo font-[400] text-[#3D3D3D] text-[16px]">
      <h1 className="py-5 bg-[#20263E] rounded-t-[11px] text-white ps-5 md:ps-[40px] lg:ps-5 text-sm  md:text-[20px] font-semibold">
        Cart Details
      </h1>
      <div className="flex flex-col w-full px-5 border-2 border-[#DEDFE1] rounded-b-[11px]">
        <div className="grid grid-cols-[2fr_1fr_1fr] border-b-2 border-dashed border-[#949494] text-[#3D3D3D] py-5">
          <h1>Product</h1>
          <h1 className="flex justify-center">Quantity</h1>
          <h1 className="flex justify-end">Subtotal</h1>
        </div>
        {cartItems.length == 0 ? (
          <p className="w-full text-[#919191] h-[100px] flex items-center justify-center border-b-2 border-dashed border[#949494]">
            No Items In Cart
          </p>
        ) : (
          <div className="flex flex-col gap-2 text-[#949494] text-sm font-oxygen py-5 border-b-2 border-dashed border[#949494]">
            {cartItems.map(({ id, name, qty, price, discount }) => (
              <CartDetailsItem
                key={id}
                name={name}
                qty={qty}
                price={price}
                discount={discount}
              />
            ))}
          </div>
        )}
        {cartPrice.map(({ title, price }, index) => (
          <div
            key={index}
            className={`flex justify-between py-5 ${
              index != cartPrice.length - 1 &&
              "border-b-2 border-dashed border-[#949494]"
            }`}
          >
            <h1 className="text-[#3D3D3D]">{title}</h1>
            <span className="text-[#949494] text-sm">$ {price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CartDetails;
