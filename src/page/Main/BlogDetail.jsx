import { BlogDataAll } from "../../data/Blog";
import { BlogCard } from "../../components";
import { useLocation } from "react-router-dom";
const BlogDetail = () => {
  const { state } = useLocation();
  const blogid = state.blogid;
  const p =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.";
  const h1 = "Lorem Ipsum Heading";
  const { img, profile, name, date } = BlogDataAll.find(
    (item) => item.id == blogid
  );
  const FeatureBlog = BlogDataAll.filter((item) => item.id != blogid).slice(
    1,
    4
  );
  return (
    <main className="w-full flex flex-col items-center mt-10 font-oxygen gap-10">
      <section className="w-[95%] flex flex-col gap-4">
        <img
          src={img}
          className="lg:w-full lg:h-[600px] object-cover object-center rounded-3xl"
          alt={name}
        />
        <h1 className="lg:text-[30px] md:text-2xl text-md  font-bold text-[#3D3D3D]">
          Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog
        </h1>
        <div className="w-full flex px-2 items-center gap-2 mt-2">
          <img src={profile} alt="" className="size-[30px] rounded-full" />
          <p className="text-[15px] font-[400] text-[#404040]">
            {name} • {date}
          </p>
        </div>
        <p className="font-exo md:text-lg text-sm text-[#666666] mt-3">{p}</p>
        <h1 className="font-exo font-semibold text-xl my-3">{h1}</h1>
        <p className="font-exo md:text-lg text-sm text-[#666666]">{p}</p>
      </section>
      <section className="w-[95%] flex flex-col gap-8">
        <div className="w-full grid md:grid-cols-2 gap-5 grid-cols-1">
          <img src={img} className="rounded-3xl" alt={name} />
          <img src={img} className="rounded-3xl" alt={name} />
        </div>
        <p className="font-exo md:text-lg text-sm text-[#666666]">{p}</p>
        <h1 className="font-exo font-semibold text-xl my-3">{h1}</h1>
        <p className="font-exo md:text-lg text-sm text-[#666666]">{p}</p>
      </section>
      <section className="w-[95%] flex flex-col items-center">
        <h1 className="w-full mb-10 md:text-[36px] md:text-start text-center md:font-medium text-[#3D3D3D] font-semibold text-[28px]">
          Suggested Posts
        </h1>
        <div className="w-full grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-16 gap-12">
          {FeatureBlog.map(({ id, img, profile, name, date, des }, index) => (
            <BlogCard
              key={index}
              id={id}
              img={img}
              profile={profile}
              name={name}
              date={date}
              des={des}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
