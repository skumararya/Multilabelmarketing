import React from "react";
import AppSidebar from "./components/AppSidebar";
import AppHeader from"./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppContent from "./components/AppContent";
import AdminRouting from "./AdminRouting";
// import {
//   AppContent,
//   AppSidebar,
//   AppFooter,
//   AppHeader,
// } from "./components/index";
const AdminLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AdminRouting />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
