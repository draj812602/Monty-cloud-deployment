import React, { useState } from "react";
import { Navbar, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalContext";
import { sideBarData } from "../data/MockData";

const SidebarComp = ({ toggleSidebarFunc }) => {
  let { toggleState } = useGlobalState();
  const renderTooltip = (props, s) => (
    // doing it dynamically so that no need to pass statically here
    <Tooltip id="button-tooltip" {...props}>
      {s}
    </Tooltip>
  );

  return (
    <>
      <div className={toggleState ? "sidebar bg-light" : "sidebar_shrink"}>
        <Navbar.Brand
          as={Link}
          to="/"
          className={
            toggleState ? "fs-2 my-md-2 mx-md-3 fw-bolder" : "fs-2  fw-bolder"
          }
        >
          <span className="text-primary">{toggleState ? "Monty" : "M"}</span>
          <span className="text-warning">{toggleState ? "Cloud" : "C"}</span>
        </Navbar.Brand>

        <Nav defaultActiveKey="/dashboard" className="flex-column fs-5 mt-5">
          {sideBarData.map((li) => {
            return (
              <NavLink
                to={li.path}
                key={li.path}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-primary fs-5 fw-semibold activeMenu"
                    : "nav-link text-primary fs-5 fw-semibold"
                }
              >
                <i className={`${li.iconClass} me-1`}></i>{" "}
                {toggleState && li.menuName}
              </NavLink>
            );
          })}
        </Nav>
      </div>

      {/* Close icon aligned to the center of sidebar */}
      <OverlayTrigger
        placement="right"
        delay={{ show: 200, hide: 200 }}
        overlay={(props) =>
          renderTooltip(props, toggleState ? "Close" : "Open")
        }
      >
        <i
          className={
            toggleState
              ? "ri-arrow-left-circle-line fw-bolder ri-2x text-warning toggleBtnOnToggle"
              : "ri-arrow-right-circle-line fw-bolder ri-2x text-warning toggleBtnoffToggle"
          }
          onClick={toggleSidebarFunc}
        ></i>
      </OverlayTrigger>
    </>
  );
};

export default SidebarComp;
