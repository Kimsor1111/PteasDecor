import { Link } from "react-router-dom";
const CategoryCard = ({ img, title }) => {
  return (
    <Link
      to={"/Products"}
      className="relative cursor-pointer overflow-hidden group rounded-3xl"
    >
      <img
        src={img}
        alt={title}
        className="rounded-3xl group-hover:scale-105 transition-all duration-500"
      />
      <span className=" size-full bg-black/20 absolute top-0 left-0 rounded-3xl flex items-end justify-center pb-3 lg:text-xl md:text-sm text-lg font-semibold text-white">
        {title}
      </span>
    </Link>
  );
};

export default CategoryCard;
