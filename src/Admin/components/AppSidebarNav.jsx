import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { CBadge } from "@coreui/react";
import { NavItem } from "react-bootstrap";

const AppSidebarNav = ({ items }) => {
  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link">Dashboard</NavLink>{" "}
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={"/not"}>
          Menu 2
        </NavLink>{" "}
      </li>
      <li className="nav-group">
        <NavLink className="nav-link nav-group-toggle" to={"/not"}>
          Menu 3
        </NavLink>
        <ul className="nav-group-items">
          <li className="nav-item">
            <NavLink className="nav-link">Sub Menu</NavLink>{" "}
          </li>
        </ul>
      </li>
    </>
  );
};

export default AppSidebarNav;
