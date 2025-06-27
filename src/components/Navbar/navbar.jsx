import {
  faUser,
  faShoppingBag,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./../../assets/Logo/PteasDecor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MenuLi, SocialIcon } from "../../data/Navbar";
const navbar = () => {
  const [user, setUser] = useState(false);
  const [menuopen, setMenuopen] = useState(false);
  useEffect(() => {
    if (menuopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuopen]);
  return (
    <>
      <aside
        className={`${
          menuopen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 fixed z-[101] left-0 flex flex-col justify-between bg-white w-full h-screen md:hidden`}
      >
        <div className="relative w-full h-[90px] border-b-2 border-black/30 flex justify-center items-center">
          <img src={logo} alt="" className="w-[120px] h-[70px]" />
          <FontAwesomeIcon
            className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2"
            icon={faX}
            onClick={() => setMenuopen(false)}
          />
        </div>
        <ul className="flex-col items-center px-5 font-semibold text-center uppercase text-md font-oxygen">
          {MenuLi.map(({ name, path }, index) => (
            <li className="py-5" key={index}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className="w-full h-[100px] flex items-center justify-center gap-5 text-2xl text-black/50 border-t-2 border-black/30">
          {SocialIcon.map((icon, index) => (
            <Link key={index} className="hover:text-black">
              <FontAwesomeIcon icon={icon} />
            </Link>
          ))}
        </div>
      </aside>
      <nav className="sticky top-0 w-full h-[90px] flex items-center justify-between md:px-10 px-5 bg-white border-b-2 border-black/30 z-[100]">
        {/* Icon Logo */}
        <div className="w-[100px] h-[65px] flex items-center font-poppins">
          <img src={logo} alt="" className="size-full" />
        </div>
        {/* Menu list */}
        <ul className="justify-center hidden gap-6 font-semibold uppercase md:flex text-md font-oxygen">
          {MenuLi.map(({ name, path }, index) => (
            <li key={index} className="text-black/70 hover:text-black">
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
        {/* Icon list */}
        <div className="flex items-center h-full gap-4 text-lg">
          <span
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setUser(!user)}
          >
            <FontAwesomeIcon icon={faUser} />
            <p
              className={`${
                user ? "-rotate-90" : "rotate-90"
              } text-sm transition-all duration-200 font-poppins selection:bg-transparent`}
            >
              &gt;
            </p>
          </span>
          <span>
            <FontAwesomeIcon className="cursor-pointer" icon={faShoppingBag} />
          </span>
          <span className="md:hidden" onClick={() => setMenuopen(true)}>
            <FontAwesomeIcon className="cursor-pointer" icon={faBars} />
          </span>
        </div>
      </nav>
    </>
  );
};

export default navbar;
