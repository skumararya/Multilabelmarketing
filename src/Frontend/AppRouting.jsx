import React from "react";
import { Route, Routes } from "react-router-dom";

// Main Menu Pages
import Home from "./Container/pages/Home/Home";
import ScreenReaderAccess from "./Container/pages/ScreenReaderAccess";

// under development page
import UnderDevelopment from "./Container/pages/UnderDevelopment";
import WhatsNewDetail from "./Container/pages/WhatsNewDetail";
import MenuPage from "./Container/pages/MenuPage";
import Contact from "./Container/pages/Contact";
const AppRouting = () => {
  return (
    <Routes>
      {/* Main Menu */}
      <Route path="/" element={<Home />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route
        path="about-us"
        element={<MenuPage title="About Us" id="1" />}
      ></Route>
      {/* <Route
        path="contact-us"
        element={<MenuPage title="Contact Us" id="2" />}
      ></Route> */}
      <Route
        path="contact-us"
        element={<Contact title="Contact Us" id="2" />}
      ></Route>
      <Route path="dams" element={<MenuPage title="Dams" id="3" />}></Route>
      <Route
        path="licensees"
        element={<MenuPage title="Licenses" id="4" />}
      ></Route>

      <Route
        path="screen-reader-access"
        element={<ScreenReaderAccess />}
      ></Route>

      {/* other detail pages */}
      <Route path="whats-new" element={<WhatsNewDetail />}></Route>

      <Route exact path="*" element={<UnderDevelopment />}></Route>
    </Routes>
  );
};

export default AppRouting;
