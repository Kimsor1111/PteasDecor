import { useEffect } from "react";
import { Navbar, Footer } from "../components";
import { Error } from "../page";
import { useLocation } from "react-router-dom";
const errorLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <Error />
      <Footer />
    </>
  );
};

export default errorLayout;
