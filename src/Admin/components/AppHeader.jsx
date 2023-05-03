import React from "react";
import { NavLink } from "react-router-dom";
import AppBreadcrumb from "./AppBreadcrumb";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CAvatar,
  CDropdownHeader

} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell, cilCog, cilEnvelopeOpen, cilList, cilMenu,cilSpeedometer,cilUser } from "@coreui/icons";
import { logo } from "../assets/brand/logo";

const AppHeader = () => {
  return (
    <>
      <CHeader position="sticky" className="mb-4">
        <CContainer fluid>
          <CHeaderToggler
            className="ps-1"
            // onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CHeaderBrand className="mx-auto d-md-none" to="/">
            <CIcon icon={logo} height={48} alt="Logo" />
          </CHeaderBrand>
          <CHeaderNav className="d-none d-md-flex me-auto">
            <CNavItem>
              <CNavLink to="/admin" component={NavLink}>
                Dashboard
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/admin" component={NavLink}>Users</CNavLink>
            </CNavItem>
           
          </CHeaderNav>
          <CHeaderNav>
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cilBell} size="lg" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cilList} size="lg" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cilEnvelopeOpen} size="lg" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
            
            <CDropdown variant="nav-item">
             <CDropdownToggle className="py-0"  caret={false}> 
             <CAvatar src={"images/logo.png"} size="md" />
             </CDropdownToggle>
            
  <CDropdownMenu style={{ transform: 'translate3d(-125px, -2px, 0px)' }}>
  
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
    <CDropdownItem href="#"> <CIcon customClassName="nav-icon" style={{width:'15px'}} icon={cilUser} /> Profile</CDropdownItem>
    <CDropdownItem href="#"> <CIcon customClassName="nav-icon" style={{width:'15px'}} icon={cilCog} /> Settings</CDropdownItem>
    <CDropdownItem href="#"> <CIcon customClassName="nav-icon" style={{width:'15px'}} icon={cilSpeedometer} /> Other Action</CDropdownItem>
  </CDropdownMenu>
 </CDropdown>
                      
            </CNavItem>
          </CHeaderNav>
          <CHeaderNav className="ms-3">
            {/* <AppHeaderDropdown /> */}
          </CHeaderNav>
        </CContainer>
        <CHeaderDivider />
        <CContainer fluid>
          <AppBreadcrumb />
        </CContainer>
      </CHeader>
    </>
  );
};

export default AppHeader;
