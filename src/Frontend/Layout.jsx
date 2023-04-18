import React from "react";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import AppRouting from "./AppRouting";

const Layout = () => {
  return (
    <>
      <Header />
      <AppRouting />
      <Footer />
    </>
  );
};

export default Layout;
