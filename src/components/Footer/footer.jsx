import logo from "./../../assets/Logo/PteasDecor.png";
import { Link } from "react-router-dom";
import {
  FooterLi,
  FooterLiIconImg,
  FooterLiIconSocial,
} from "../../data/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const footer = () => {
  return (
    <footer className="w-full pt-10 mt-32 bg-[#20263e] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-full py-5 h-fit">
        <img src={logo} alt="PteasDecor" className="w-[180px]" />
        <h1 className="my-3 font-oxygen tracking-wider text-white md:text-3xl text-xl 2xl:w-1/4 2xl:px-0 px-5 md:leading-[45px] text-center">
          Subscribe PteasDecor To Stay Updated About Discounts
        </h1>
        <div className="relative text-white">
          <input
            type="text"
            className="border outline-none pl-3 py-3 rounded-full w-[290px] h-[45px] pr-[45px] font-oxygen"
            placeholder="person@gmail.com"
          />
          <button className="font-poppins size-[35px] top-1/2 -translate-y-1/2 absolute right-[7px] text-xl text-white rounded-full bg-black/50">
            &gt;
          </button>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 px-10 py-10 mt-10 border-y-2 border-white/50 h-fit 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-7 ">
        {FooterLi.map(({ title, submenu }, index) => (
          <ul key={index} className="flex flex-col gap-3 ">
            <li className="mb-2 text-xl font-semibold text-white uppercase md:text-md font-poppins">
              {title}
            </li>
            {submenu.map(({ name, path, icon }, i) => (
              <li
                key={i}
                className="w-fit text-sm text-white/50 hover:text-white"
              >
                <Link
                  to={path}
                  className="flex items-center gap-2 font-medium font-poppins"
                >
                  <FontAwesomeIcon
                    className="w-[35px] py-2.5 bg-gray-200/20 rounded"
                    icon={icon}
                  />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
        <div className="flex flex-col gap-3">
          {FooterLiIconImg.map(({ title, icon }, index) => (
            <div key={index} className="w-full">
              <h1 className="mb-2 text-xl font-semibold text-white uppercase md:text-md font-poppins">
                {title}
              </h1>
              <div className="w-[190px] flex justify-between pr-3 gap-5">
                {icon.map((item, i) => (
                  <img
                    key={i}
                    src={item}
                    alt={`Payment ${i}`}
                    className="w-1/4 h-[35px]"
                  />
                ))}
              </div>
            </div>
          ))}
          {FooterLiIconSocial.map(({ title, icon }, index) => (
            <div key={index} className="w-full">
              <h1 className="mb-2 text-xl font-semibold text-white uppercase md:text-md font-poppins">
                {title}
              </h1>
              <div className="w-[200px] flex justify-between pr-3 gap-5 mt-3">
                {icon.map((item, index) => (
                  <Link
                    key={index}
                    className="flex items-center gap-2 font-medium font-poppins text-white/50 hover:text-white"
                  >
                    <FontAwesomeIcon
                      className="w-[35px] py-2.5 bg-gray-200/20 rounded"
                      icon={item}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[70px] flex items-center justify-center text-white/50 font-medium tracking-wider">
        Copyright <sup>©</sup> 2025 PteasDecor, Inc
      </div>
    </footer>
  );
};

export default footer;
