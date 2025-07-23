import { CartItem, ProductCard } from "../../components";
import img from "./../../assets/Product/p1.jpg";
import { Link } from "react-router-dom";
const Cart = () => {
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
  const sum = carts.reduce(
    (total, item) =>
      total +
      item.qty * (item.price - (item.price * item.discount) / 100).toFixed(2),
    0
  );
  const coupon = 10;
  return (
    <main className="w-full h-full flex flex-col items-center gap-[100px] mt-[100px]">
      <div className="w-[95%] md:w-[90%] flex flex-col lg:flex-row gap-[30px] lg:gap-[50px]">
        <aside className="w-full lg:w-[60%] h-fit rounded-xl border border-gray-400 flex flex-col">
          <div className="py-5 bg-[#20263E] rounded-t-[11px] grid grid-cols-[2fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] gap-3 text-white text-[20px]">
            <h1 className="ps-[20px] md:ps-[40px]">Product</h1>
            <h1 className="w-full text-center">Price</h1>
            <h1 className="w-full text-center">Quantity</h1>
            <h1 className="w-full text-center pe-[20px]">Total</h1>
          </div>
          {carts.map(({ id, name, price, qty, imgsrc, discount }) => (
            <CartItem
              key={id}
              name={name}
              price={price}
              qty={qty}
              imgsrc={imgsrc}
              discount={discount}
            />
          ))}
        </aside>
        <aside className="w-full lg:w-[35%] h-fit rounded-xl border border-gray-400 flex flex-col">
          <h1 className="py-5 bg-[#20263E] rounded-t-[11px] text-white ps-5 md:ps-[40px] lg:ps-5 text-[20px]">
            Cart Total
          </h1>
          <div className="flex justify-between px-5 md:px-[40px] lg:px-5 py-5 border-t border-gray-300 text-[18px]">
            <h1>SUBTOTAL</h1>${sum}
          </div>
          <div className="flex justify-between px-5 md:px-[40px] lg:px-5 py-5 border-t border-gray-300 text-[18px]">
            <h1>DISCOUNT</h1>
            {coupon}%
          </div>
          <div className="flex justify-between px-5 md:px-[40px] lg:px-5 py-5 border-t border-gray-300 text-[18px]">
            <h1>TOTAL</h1>${sum - (sum * coupon) / 100}
          </div>
          <Link to={'/Checkout'} className="py-5 bg-black rounded-b-[11px] text-white text-center text-[18px] hover:cursor-pointer hover:bg-black/90 active:bg-black/80">
            Proceed to Check Out
          </Link>
        </aside>
      </div>
      <div className="w-[95%] md:w-[90%]">
        <h1 className="text-[30px] font-bold">You May Also Like</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[30px] md:mt-[50px]">
          {carts.map(({ id, name, price, discount, imgsrc }) => (
            <ProductCard
              key={id}
              name={name}
              img={imgsrc}
              discount={discount}
              price={price}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Cart;
