import { useEffect, useState } from "react";
import { Checkbox, ProductCard } from "./../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faSearch,
  faSliders,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { ProductItem } from "./../../data/Product";

const ProductPage = () => {
  const [product, setProduct] = useState(ProductItem.slice(0, 8));
  const options = [
    { label: "All Categories", value: "All Categories" },
    { label: "Bedroom", value: "Bedroom" },
    { label: "Bathroom", value: "Bathroom" },
    { label: "Kitchen", value: "Kitchen" },
    { label: "Living Room", value: "Living Room" },
    { label: "Dinner Room", value: "Dinner Room" },
  ];
  const priceRange = [
    { label: "Default Price", value: "Default Price" },
    { label: "$0.00 - $20.00", value: "$0.00 - $20.00" },
    { label: "$20.00 - $50.00", value: "$20.00 - $50.00" },
    { label: "$50.00 - $100.00", value: "$50.00 - $100.00" },
    { label: "$100.00 - $200.00", value: "$100.00 - $200.00" },
    { label: "$200.00 - $500.00", value: "$200.00 - $500.00" },
  ];
  const [category, setCategory] = useState("All Categories");
  const handleCategory = (value) => {
    setCategory((prev) => (prev === value ? "" : value));
  };
  const [price, setPrice] = useState("Default Price");
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
    <main className="w-screen lg:w-full h-auto relative lg:flex mt-[20px]">
      <aside
        className={`lg:w-[27%] xl:w-[22%] fixed lg:sticky top-20 lg:top-[15%] w-[85%] md:w-1/2 lg:translate-x-0 z-[10] bg-white h-full duration-500 ${
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
        <div className="w-full h-auto lg:overflow-y-auto lg:max-h-[calc(100vh-100px)] flex flex-col lg:items-center items-center gap-[20px] lg:py-[20px]">
          <div className="flex flex-col justify-center px-[20px] py-[20px] border-[1px] border-[#E2E2E2] h-fit lg:mt-[10px] w-[230px] lg:w-[240px] xl:w-[80%]">
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
          <div className="flex flex-col justify-center px-[20px] py-[20px] border-[1px] border-[#E2E2E2] h-fit w-[230px] lg:w-[240px] xl:w-[80%]">
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
        </div>
      </aside>
      <div
        className={`bg-black opacity-50 fixed top-0 right-0 z-[5] w-full h-full lg:hidden ${
          filter ? "block" : "hidden"
        }`}
      ></div>
      <aside className="lg:w-[73%] xl:w-[78%] w-screen h-full flex flex-col items-center z-[1]">
        <div className="lg:w-[93%] flex flex-col items-center lg:items-baseline gap-5">
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
              Showing 1-{product.length} of {ProductItem.length} Item(s)
            </h1>
            <span className="text-[#949494] text-[16px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              sapiente nihil maxime blanditiis repellendus.
            </span>
          </div>
          <div className="grid grid-cols-2 justify-center md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] space-y-5 mx-10 lg:mx-0">
            {product.map(({ id, name, price, discount, img }, index) => (
              <ProductCard
                key={index}
                id={id}
                name={name}
                price={price}
                discount={discount}
                img={img}
              />
            ))}
          </div>
          <div className="flex flex-col items-center w-full gap-4">
            <span className="text-[#414141] text-[16px]">
              Showing {product.length} of {ProductItem.length} item(s)
            </span>
            {product.length != ProductItem.length && (
              <button
                className={`flex gap-2 items-center bg-[#282828] px-5 py-2 rounded-full text-white text-[16px] font-poppins active:bg-gray-800 cursor-pointer`}
                onClick={() => setProduct(ProductItem)}
              >
                Load More
                <FontAwesomeIcon
                  className="text-[12px]"
                  icon={faChevronRight}
                />
              </button>
            )}
          </div>
        </div>
      </aside>
    </main>
  );
};

export default ProductPage;
