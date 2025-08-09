import { CartItem, ProductCard } from "../../components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removefromcart, increaseqty, decreaseqty } from "../../app/cartSlice";
import { ProductItem } from "../../data/Product";
import { useRef } from "react";
import { emptycart } from "../../app/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const sum = cartItems.reduce(
    (total, item) =>
      total +
      item.qty * (item.price - (item.price * item.discount) / 100).toFixed(2),
    0
  );
  const Product = useRef(
    ProductItem.sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map((p) => ({ ...p, img: p.img[0] }))
  );
  const coupon = 10;
  return (
    <main className="flex flex-col items-center w-full h-full gap-10 mt-16 font-oxygen">
      <section className="w-[95%] font-exo">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl  font-bold text-[#2d2d2d]">Cart</h1>
          <p
            onClick={() => dispatch(emptycart())}
            className="hover:underline text-[16px] text-[#575757] cursor-pointer text-nowrap"
          >
            Clear All
          </p>
        </div>
        <p className="text-[16px] text-[#575757] mt-4 ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </section>
      <section className="w-[95%] flex flex-col lg:flex-row gap-[30px] lg:gap-[50px] font-exo">
        <aside className="w-full lg:w-[65%] h-fit rounded-xl flex flex-col">
          <div className="py-5 bg-[#20263E] rounded-t-[11px] grid grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] gap-3 text-white text-sm md:text-[20px]">
            <h1 className="ps-[20px] md:ps-[40px]">Product</h1>
            <h1 className="w-full text-center">Price</h1>
            <h1 className="w-full text-center">Quantity</h1>
            <h1 className="w-full text-center pe-[20px]">Total</h1>
          </div>
          {cartItems.length == 0 ? (
            <p className="w-full text-lg h-[345px] border-t-0 flex items-center justify-center text-[#919191] border-2 border-[#DEDFE1] rounded-b-[11px]">
              No Items In Cart.
            </p>
          ) : (
            <div className="border-2 border-t-0 border-[#DEDFE1] rounded-b-[11px]">
              {cartItems.map(
                ({ id, name, price, qty, image, stock, discount }) => (
                  <CartItem
                    key={id}
                    name={name}
                    price={price}
                    qty={qty}
                    img={image}
                    discount={discount}
                    stock={stock}
                    remove={() => dispatch(removefromcart(id))}
                    increase={() => dispatch(increaseqty({ id, qty, stock }))}
                    decrease={() => dispatch(decreaseqty(id))}
                  />
                )
              )}
            </div>
          )}
        </aside>
        <aside className="w-full lg:w-[35%] h-fit rounded-xl flex flex-col">
          <h1 className="py-5 bg-[#20263E] rounded-t-[11px] text-white ps-5 md:ps-[40px] lg:ps-5 text-sm md:text-[20px]">
            Cart Total
          </h1>
          <div className="border-2 border-[#DEDFE1]">
            <div className="flex justify-between px-5 md:px-[40px] lg:px-5 py-8 border-[#DEDFE1] text-sm md:text-[18px] text-[#949494]">
              <h1 className="text-[#3D3D3D]">Subtotal</h1>${sum.toFixed(2)}
            </div>
            <div className="flex justify-between px-5 md:px-[40px] lg:px-5 py-8 border-t-2 border-[#DEDFE1] text-sm md:text-[18px] text-[#949494]">
              <h1 className="text-[#3D3D3D]">Discount</h1>
              {coupon}%
            </div>
            <div className="flex justify-between px-5 md:px-[40px] lg:px-5 py-8 border-t-2 border-[#DEDFE1] text-sm md:text-[18px] text-[#949494]">
              <h1 className="text-[#3D3D3D]">Total</h1>$
              {(sum - (sum * coupon) / 100).toFixed(2)}
            </div>
          </div>
          <Link
            to={"/Checkout"}
            className="py-5 bg-black font-exo rounded-b-[11px] text-white text-center text-[18px] hover:cursor-pointer hover:bg-black/90 active:bg-black/80"
          >
            Proceed to Checkout
          </Link>
        </aside>
      </section>
      <section className="w-[95%]">
        <h1 className="md:text-[30px] text-2xl font-bold">You May Also Like</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-[30px] md:mt-[50px]">
          {Product.current.map(({ id, name, price, discount, img }) => (
            <ProductCard
              key={id}
              id={id}
              name={name}
              img={img}
              discount={discount}
              price={price}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Cart;
