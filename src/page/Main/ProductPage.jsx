import { useEffect, useState } from "react";
import { Checkbox, ProductCard } from "./../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faSearch,
  faSliders,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { ProductItem } from "./../../data/Product";

const ProductPage = () => {
  const product = ProductItem;
  const options = [
    { label: "Electronic Devices", value: "Electronic Devices" },
    { label: "Office Decors", value: "Office Decors" },
    { label: "Natural Decors", value: "Natural Decors" },
    { label: "Bedroom Decors", value: "Bedroom Decors" },
    { label: "Living Room Decors", value: "Living Room Decors" },
    { label: "Bathroom Decors", value: "Bathroom Decors" },
  ];
  const priceRange = [
    { label: "$0.00 - $20.00", value: "$0.00 - $20.00" },
    { label: "$20.00 - $50.00", value: "$20.00 - $50.00" },
    { label: "$50.00 - $100.00", value: "$50.00 - $100.00" },
    { label: "$100.00 - $200.00", value: "$100.00 - $200.00" },
    { label: "$200.00 - $500.00", value: "$200.00 - $500.00" },
  ];
  const [category, setCategory] = useState("");
  const handleCategory = (value) => {
    setCategory((prev) => (prev === value ? "" : value));
  };
  const [price, setPrice] = useState("");
  const handlePrice = (value) => {
    setPrice((prev) => (prev === value ? "" : value));
  };
  const [filter, setFilter] = useState(false);
  useEffect(() => {
    if (filter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filter]);
  return (
    <main className="w-screen lg:w-full h-screen relative lg:flex overflow-scroll">
      <aside
        className={`lg:w-[21%] w-full md:w-1/2 items-center fixed lg:translate-x-0 z-[10] bg-white h-screen flex flex-col lg:items-end gap-[20px] lg:sticky lg:top-0 top-20 duration-500 ${
          filter ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div className="flex justify-end mt-[20px] w-full pe-[20px] lg:hidden">
          <FontAwesomeIcon
            className="text-[25px]"
            onClick={() => setFilter(false)}
            icon={faX}
          />
        </div>
        <div className="flex flex-col justify-center px-[20px] py-[20px] border-[1px] border-[#E2E2E2] h-fit lg:mt-[20px] w-[220px]">
          <span className="border-s-2 border-black ps-2 text-[22px] font-medium text-[#2D2D2D]">
            Categories
          </span>
          <ul className="flex flex-col gap-2 mt-2">
            {options.map(({ label, value }) => (
              <Checkbox
                key={value}
                label={label}
                value={value}
                topic={category}
                onChange={handleCategory}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center px-[20px] py-[20px] border-[1px] border-[#E2E2E2] h-fit w-[220px]">
          <span className="border-s-2 border-black ps-2 text-[22px] font-medium text-[#2D2D2D]">
            Price Range
          </span>
          <ul className="flex flex-col gap-2 mt-2">
            {priceRange.map(({ label, value }) => (
              <Checkbox
                key={value}
                label={label}
                value={value}
                topic={price}
                onChange={handlePrice}
              />
            ))}
          </ul>
        </div>
      </aside>
      <div
        className={`bg-black opacity-50 fixed top-0 right-0 z-[5] w-full h-full lg:hidden ${
          filter ? "block" : "hidden"
        }`}
      ></div>
      <aside className="lg:w-[79%] w-screen flex flex-col items-center z-[1]">
        <div className="lg:w-[93%] h-screen flex flex-col items-center lg:items-baseline gap-5">
          <span className="text-[26px] lg:text-[36px] w-full lg:w-fit text-center font-oxygen font-semibold text-[#3D3D3D]">
            Our Collection Of Products
          </span>
          <div className="relative w-[80%] lg:w-full">
            <input
              className="w-full sticky top-0 font-oxygen ps-[20px] pe-[8px] text-[16px] text-[#5F5F5F] rounded-[42px] border-[1px] border-[#00000026] py-[8px] focus:outline-none focus:bg-transparent focus:ring-0"
              type="search"
              placeholder="Search An Item"
            />
            <FontAwesomeIcon
              className="absolute right-[5px] top-1/2 -translate-y-1/2 bg-[#666666] text-white rounded-[24px] p-[8px] hover:cursor-pointer active:bg-black/90"
              icon={faSearch}
            />
          </div>
          <div className="flex gap-2 w-full ps-[10%] items-center lg:hidden">
            <FontAwesomeIcon
              onClick={() => setFilter(true)}
              className="border-[1px] border-gray-400 px-3 py-1 rounded-md text-white bg-gray-800/90 text-[20px]"
              icon={faSliders}
            />
            <span className="text-gray-700/90">Filter</span>
          </div>
          <div className="w-[80%] lg:w-full text-center lg:text-start">
            <h1 className="text-[16px] text-[#414141] font-semibold">
              Showing 1-12 of 24 Item(s)
            </h1>
            <span className="text-[#949494] text-[16px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              sapiente nihil maxime blanditiis repellendus.
            </span>
          </div>
          <div className="grid grid-cols-2 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] space-y-5 mx-10 lg:mx-0">
            {product.map(({ name, price, discount, img }, index) => (
              <ProductCard
                key={index}
                name={name}
                price={price}
                discount={discount}
                img={img}
              />
            ))}
          </div>
          <div className="flex flex-col items-center w-full gap-4 pb-[50px]">
            <span className="text-[#414141] text-[16px]">
              Showing 12 of 24 item(s)
            </span>
            <button className="flex gap-2 items-center bg-[#282828] px-3 py-1 rounded-full text-white text-[16px] font-poppins">
              Load More
              <FontAwesomeIcon className="text-[12px]" icon={faGreaterThan} />
            </button>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default ProductPage;
