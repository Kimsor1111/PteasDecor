import { Link, useNavigate } from "react-router-dom";
const BlogCard = ({ id, img, profile, name, date, des }) => {
  const navigate = useNavigate();
  const path = `/Blog/BlogDetail/${name.replaceAll(/\s+/g, "-")}`;
  return (
    <Link
      to={path}
      onClick={(e) => {
        e.preventDefault();
        navigate(path, {
          state: { blogid: id },
        });
      }}
      className="flex flex-col gap-3 cursor-pointer"
    >
      <img
        src={img}
        alt={name}
        className="w-full lg:h-auto md:h-[400px] object-cover object-center rounded-3xl"
      />
      <div className="w-full flex px-2 items-center gap-2">
        <img
          src={profile}
          alt={name}
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
