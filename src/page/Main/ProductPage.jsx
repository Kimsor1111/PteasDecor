import { useEffect, useMemo, useState } from "react";
import { Checkbox, ProductCard } from "./../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSliders, faX } from "@fortawesome/free-solid-svg-icons";
import { ProductItem } from "./../../data/Product";

const ProductPage = () => {
  const options = [
    { label: "All Categories", value: "All Categories" },
    { label: "Bedroom", value: "Bedroom" },
    { label: "Bathroom", value: "Bathroom" },
    { label: "Kitchen", value: "Kitchen" },
    { label: "Living Room", value: "Living Room" },
    { label: "Dining Room", value: "Dining Room" },
  ];
  const priceRange = [
    { label: "Default Price", value: "Default Price" },
    { label: "$0.00 - $30.00", value: "0.00-30.00" },
    { label: "$30.00 - $60.00", value: "30.00-60.00" },
    { label: "$60.00 - $90.00", value: "60.00-90.00" },
    { label: "$90.00 - $120.00", value: "90.00-120.00" },
    { label: "$120+", value: "120.00" },
  ];
  const [category, setCategory] = useState(options[0].value);
  const handleCategory = (value) => {
    setCategory(value);
  };
  const [price, setPrice] = useState(priceRange[0].value);
  const handlePrice = (value) => {
    setPrice(value);
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
  const Filter = useMemo(() => {
    let filtered = [...ProductItem];
    if (category !== "All Categories")
      filtered = filtered.filter((p) => p.category === category);
    if (price !== "Default Price") {
      const [min, max] = price.includes("-")
        ? price.split("-").map((pr) => parseFloat(pr))
        : [parseFloat(price), Infinity];
      filtered = filtered.filter(
        (p) =>
          p.price * (1 - p.discount / 100) >= min &&
          p.price * (1 - p.discount / 100) <= max
      );
    }
    return filtered;
  }, [category, price]);

  return (
    <main className="w-screen lg:w-full h-auto relative lg:flex mt-[20px] font-oxygen">
      <aside
        className={`lg:w-[27%] xl:w-[22%] fixed lg:sticky top-20 lg:top-[15%] w-full md:w-1/2 lg:translate-x-0 z-[10] bg-white h-full duration-500 ${
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
      <aside className="lg:w-[73%] xl:w-[78%] w-full  h-full flex flex-col items-center z-[1]">
        <div className="lg:w-[98%] w-full flex flex-col items-center lg:items-baseline gap-5">
          <span className="text-[26px] lg:text-[36px] w-full lg:w-fit text-center font-oxygen font-semibold text-[#3D3D3D]">
            Our Collection Of Products
          </span>
          <div className="relative w-[95%] lg:w-full">
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
          <div className="w-[95%] flex gap-2 items-center lg:hidden">
            <FontAwesomeIcon
              onClick={() => setFilter(true)}
              className="border-[1px] border-gray-400 px-3 py-1 rounded-md text-white bg-gray-800/90 text-[20px]"
              icon={faSliders}
            />
            <span className="text-gray-700/90">Filter</span>
          </div>

          <span className="text-[#949494] text-[16px] w-[95%] lg:w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            sapiente nihil maxime blanditiis repellendus.
          </span>
          {Filter.length == 0 ? (
            <div className="w-full text-[#919191] h-[405px] flex flex-col items-center justify-center">
              <span>
                <svg
                  className="shrink-0 inline w-6 h-6 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                No products were found matching your selection.
              </span>
              <button
                className="mt-5 bg-black text-white py-3 px-5 rounded-full font-exo"
                onClick={() => {
                  setCategory(options[0].value);
                  setPrice(priceRange[0].value);
                }}
              >
                Clear Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 w-[95%] md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] space-y-5 mx-10 lg:mx-0">
              {Filter.map(
                (
                  { id, name, price, discount, stock, rate, category, img },
                  index
                ) => (
                  <ProductCard
                    key={index}
                    id={id}
                    name={name}
                    price={price}
                    discount={discount}
                    stock={stock}
                    rate={rate}
                    category={category}
                    img={img[0]}
                  />
                )
              )}
            </div>
          )}
        </div>
      </aside>
    </main>
  );
};

export default ProductPage;
