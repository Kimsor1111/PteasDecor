import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ id, img, profile, name, date, des }) => {
  const navigate = useNavigate();
  return (
    <Link
      to={`/Blog/BlogDetail/${name.replaceAll(/\s+/g, "-")}`}
      onClick={(e) => {
        e.preventDefault();
        navigate(`/Blog/BlogDetail/${name.replaceAll(/\s+/g, "-")}`, {
          state: { blogid: id },
        });
      }}
      className="flex flex-col gap-3 cursor-pointer"
    >
      <img
        src={img}
        alt=""
        className="w-full lg:h-auto md:h-[400px] object-cover object-center rounded-3xl"
      />
      <div className="w-full flex px-2 items-center gap-2">
        <img
          src={profile}
          alt=""
          className="size-[30px] object-cover object-center rounded-full"
        />
        <p className="text-[15px] font-[400] text-[#404040]">
          {name} • {date}
        </p>
      </div>
      <p className="text-[18px] text-[#404040] px-2">{des}</p>
    </Link>
  );
};

export default BlogCard;
