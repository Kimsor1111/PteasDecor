import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { useLocation } from "react-router-dom";
const errorLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <h1>This is Error</h1>
      <Footer />
    </>
  );
};

export default errorLayout;
