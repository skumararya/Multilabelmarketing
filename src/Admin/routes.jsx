import React from "react";
const Dashboard = React.lazy(() => import("./views/dashboard/dashboard"));
const pagenotFound = React.lazy(() => import("./views/pages/PagenotFound"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/pagenotFound", name: "pagenotFound", element: pagenotFound },
  { path: "*", name: "pagenotFound", element: pagenotFound },
];

export default routes;
