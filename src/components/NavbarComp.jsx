import React from "react";
import { Navbar, Nav, Tooltip, OverlayTrigger } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SearchComp from "./Search";
import { useGlobalState } from "../context/GlobalContext";
import { useLocation } from "react-router-dom"; // to get the route information

const NavbarComp = () => {
  // getting current route I am into to play with search,
  //although this we can handle with API which will hold the value to show search or not
  const location = useLocation();

  let { toggleState } = useGlobalState();

  const renderTooltip = (props, s) => (
    // doing it dynamically so that no need to pass statically here
    <Tooltip id="button-tooltip" {...props}>
      {s}
    </Tooltip>
  );

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      fixed="top"
      className={toggleState ? "pe-4 navBar" : "pe-4 navBar_not_shrink"}
    >
      <div
        className={toggleState ? "search_container" : "search_container_toggle"}
      >
        {/* deciding which page search should show, for now I am showing it in server page */}
        {location.pathname === "/servers" && <SearchComp />}
      </div>
      {/* below line is to create Navtoggle if we have menu and opening the Nav on small device */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

      <Navbar.Collapse id="basic-navbar-nav me-auto">
        <Nav className="ms-auto">
          <NavLink className="nav-link text-dark fw-bold ms-auto d-flex">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 200, hide: 200 }}
              overlay={(props) =>
                renderTooltip(
                  props,
                  "These are non functional menus, just to show the use of tooltip"
                )
              }
            >
              <i class="ri-logout-circle-line pe-1 text-center"></i>
            </OverlayTrigger>
            Logout
          </NavLink>
          <NavLink className="nav-link text-dark fw-bold ms-auto d-flex">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 200, hide: 200 }}
              overlay={(props) =>
                renderTooltip(
                  props,
                  "These are non functional menus, just to show the use of tooltip"
                )
              }
            >
              <i class="ri-file-info-line pe-1 text-center"></i>
            </OverlayTrigger>
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
