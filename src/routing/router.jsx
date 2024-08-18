import React, { useState, useCallback, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SidebarComp from "../components/SidebarComp";

// using lazy loading , so when application opens it will only load the dashboard page(required one)
// not the other ones
const Servers = lazy(() => import("../pages/Servers"));
const NotFound = lazy(() => import("../pages/NotFound"));
import NavbarComp from "../components/NavbarComp";

// context
import { useGlobalDispatch, useGlobalState } from "../context/GlobalContext";

const AppRouter = () => {
  const [toggleSidebarState, settoggleSidebarState] = useState(false);
  let { toggleState } = useGlobalState();
  const dispatch = useGlobalDispatch();
  // this is a global function to handle the toggle of sidebar, because we need toggle state throught the application
  // That is why I am storing it in global state / application state
  // also using useCallback to memoize this function to improve code when we have a large scale application
  const toggleSidebarFunc = useCallback(() => {
    dispatch({
      type: "toggle_side_bar",
      payload: toggleSidebarState,
    });
    settoggleSidebarState((prevState) => !prevState);
  }, [dispatch, toggleSidebarState]);

  // There is a reason why I am using Sidebar Navbar here in route because in future
  //if login and signup pages there I can conditionally wrap iut here

  return (
    <Router>
      <div className="">
        <SidebarComp toggleSidebarFunc={toggleSidebarFunc} />
        <NavbarComp />
      </div>
      <div className={toggleState ? "main" : "main_not_shrink"}>
        <Suspense
          fallback={
            <div className="fs-5 fw-bold text-primary text-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default AppRouter;
