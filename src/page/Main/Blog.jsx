import { useState } from "react";
import { BlogCard, BlogWidget } from "../../components";
import { BlogData1, BlogData2, BlogWidgetData } from "./../../data/Blog";
const Blog = () => {
  const [blogdata2, setBlogdata2] = useState(BlogData2.slice(0, 3));
  return (
    <main className="flex flex-col items-center w-full h-fit font-oxygen">
      <section className="w-[95%]">
        <h1 className="w-full my-5 md:text-[36px] md:text-start text-center md:font-medium text-[#3D3D3D] font-semibold text-[28px]">
          Our Feature Posts
        </h1>
        <BlogWidget
          img={BlogWidgetData.img}
          title={BlogWidgetData.title}
          des={BlogWidgetData.des}
          profile={BlogWidgetData.profile}
          name={BlogWidgetData.name}
          date={BlogWidgetData.date}
        />
      </section>
      <section className="w-[95%] grid lg:grid-cols-3 lg:gap-5 gap-12 mt-10">
        {BlogData1.map(({ img, profile, name, date, des }, index) => (
          <BlogCard
            key={index}
            img={img}
            profile={profile}
            name={name}
            date={date}
            des={des}
          />
        ))}
      </section>
      <section className="w-[95%] flex flex-col items-center">
        <h1 className="w-full mb-10 mt-20 md:text-[36px] md:text-start text-center md:font-medium text-[#3D3D3D] font-semibold text-[28px]">
          Latest Posts
        </h1>
        <div className="w-full grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-16 gap-12">
          {blogdata2.map(({ img, profile, name, date, des }, index) => (
            <BlogCard
              key={index}
              img={img}
              profile={profile}
              name={name}
              date={date}
              des={des}
            />
          ))}
        </div>
        {blogdata2 != BlogData2 && (
          <button
            className="bg-[#282828] w-fit px-5 py-2 mt-10 text-white rounded-full outline-none flex gap-2 items-center cursor-pointer"
            onClick={() => setBlogdata2(BlogData2)}
          >
            Load More Blogs
          </button>
        )}
      </section>
    </main>
  );
};

export default Blog;
