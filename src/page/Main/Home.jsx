import { BigHero, ProductCard } from "../../components";
import { BigHeroData, FeatureProductData } from "../../data/Home";
const Home = () => {
  return (
    <main className="flex flex-col w-full h-fit">
      {/* Bighero product section  */}
      <BigHero
        img={BigHeroData.img}
        title={BigHeroData.title}
        des={BigHeroData.des}
      />

      <section className="flex items-center justify-center w-full my-20 bg-white">
        <div className="w-[90%]">
          <div className="flex flex-col items-center justify-between w-full gap-3 text-center lg:text-start lg:flex-row">
            <h1 className="lg:w-[70%] text-4xl tracking-wider font-oxygen text-nowrap">
              Feature Products
            </h1>
            <p className="text-[#666666] md:text-sm text-[10px] lg:w-[30%] lg:px-0 px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc in molestie feugiat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10 lg:grid-cols-4">
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
    </main>
  );
};

export default Home;
