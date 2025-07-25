import { WishlistEntry } from "../../components";
const MyAccount = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full mt-10 font-oxygen">
        <section className="w-[95%]">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl  font-bold text-[#2d2d2d]">Wishlist</h1>
            <p className="hover:underline text-[16px] text-[#575757] cursor-pointer text-nowrap">
              Clear All
            </p>
          </div>
          <p className="text-[16px] text-[#575757] mt-4 ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <div className="py-5 bg-[#20263E] mt-5 rounded-t-[11px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-3 text-white md:text-[14px] text-[10px] font-bold">
            <h1 className="ps-[10px] md:ps-[20px]">Items</h1>
            <h1 className="w-full">Price</h1>
            <h1 className="w-full">Stock</h1>
            <h1 className="w-full text-center">Remove</h1>
            <h1 className="w-full text-center">Add To Cart</h1>
          </div>
          <div className="md:text-[16px] text-[11px]">
            <WishlistEntry status={"In Progress"} />
            <WishlistEntry status={"Succeed"} />
            <WishlistEntry status={"Failed"} />
          </div>
        </section>
      </main>
    </>
  );
};

export default MyAccount;
