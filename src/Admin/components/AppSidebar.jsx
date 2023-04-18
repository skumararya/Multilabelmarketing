import React from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import {
  CNavTitle,
  CNavItem,
  CBadge,CNavGroup,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPuzzle ,cilSpeedometer} from "@coreui/icons";
import AppSidebarNav from "./AppSidebarNav";

import { logoNegative } from "../assets/brand/logo-negative";
import { sygnet } from "../assets/brand/sygnet";
import navigation from "../_nav";

const AppSidebar = () => {
  return (
    <CSidebar position="fixed">
  <CSidebarBrand>Sidebar Brand</CSidebarBrand>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#">
      <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
      Nav item
    </CNavItem>
    <CNavItem href="#">
      <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
      With badge
      <CBadge color="primary ms-auto">NEW</CBadge>
    </CNavItem>
    <CNavGroup toggler="Nav dropdown">
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler />
</CSidebar>
  );
};

export default AppSidebar;
