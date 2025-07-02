import { BigHero, ProductCard, CategoryCard } from "../../components";
import {
  BigHeroData,
  FeatureProductData,
  CategoryData,
  PopularProductData,
} from "../../data/Home";

const Home = () => {
  return (
    <main className="flex flex-col w-full h-fit">
      {/* Bighero product section  */}
      <BigHero
        img={BigHeroData.img}
        title={BigHeroData.title}
        des={BigHeroData.des}
      />

      {/* Product Feature Section */}
      <section className="flex items-center justify-center w-full my-16 bg-white">
        <div className="w-[90%]">
          <div className="flex flex-col items-center justify-between w-full gap-3 text-center lg:text-start lg:flex-row">
            <h1 className="lg:w-[70%] md:text-4xl text-2xl tracking-wider font-semibold font-oxygen text-nowrap">
              Feature Products
            </h1>
            <p className="text-[#666666] md:text-sm text-[10px] lg:w-[30%] lg:px-0 px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc in molestie feugiat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 lg:grid-cols-4">
            {FeatureProductData.map(({ name, price, discount, img }, index) => (
              <ProductCard
                key={index}
                name={name}
                price={price}
                discount={discount}
                img={img}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="flex flex-col gap-10 items-center justify-center w-full mb-16">
        <div className="text-center flex flex-col gap-5">
          <h1 className="md:text-4xl text-2xl tracking-wider font-semibold font-oxygen px-3">
            View Our Range Of Categories
          </h1>
          <p className="text-[#666666] md:text-sm text-[10px] px-10">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
        </div>
        <div className="md:w-[90%] w-[80%] grid md:grid-cols-3 gap-10">
          {CategoryData.map(({ title, img }, index) => (
            <CategoryCard key={index} img={img} title={title} />
          ))}
        </div>
      </section>

      {/* Product Popular Section */}
      <section className="flex items-center justify-center w-full my-16 bg-white">
        <div className="w-[90%]">
          <div className="flex justify-between md:flex-row flex-col items-center w-full gap-3 text-start">
            <span className="md:text-start text-center">
              <h1 className="md:text-4xl text-2xl tracking-wider font-semibold font-oxygen md:mb-0 mb-3">
                Most Popular Products
              </h1>
              <p className="text-[#666666] md:text-sm text-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fringilla nunc in molestie feugiat.
              </p>
            </span>
            <button className="text-white text-[12px] bg-black/90 hover:bg-black h-fit flex gap-2 px-4 font-semibold font-oxygen py-2 rounded-3xl cursor-pointer">
              View All <p className="font-poppins pt-[0.8px]">&gt;</p>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 lg:grid-cols-4">
            {PopularProductData.map(({ name, price, discount, img }, index) => (
              <ProductCard
                key={index}
                name={name}
                price={price}
                discount={discount}
                img={img}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
