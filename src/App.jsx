import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Layout } from "./pages/Layout";
import { useDispatch } from "react-redux";
import { setShowLeftMenu, setShowRightMenu } from "./redux/slices/layout-slice";
function App() {
  let dispatch = useDispatch();
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/details/:id", element: <Details /> },
      ],
    },
  ];

  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className="parent">
        <div class="go-top">
          <i class="fa-solid fa-angles-up"></i>
        </div>
        <div class="mobile-media">
          <i
            class="fa-solid fa-ellipsis-vertical"
            onClick={() => dispatch(setShowLeftMenu(true))}
          ></i>
          <i
            class="fa-solid fa-bars"
            onClick={() => dispatch(setShowRightMenu(true))}
          ></i>
        </div>
        <div className="parent-wrapper">
          <div className="parent-container">
            <div className="parent-content">
              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element}>
                    {route.children &&
                      route.children.map((childRoute, childIndex) => (
                        <Route
                          key={childIndex}
                          path={childRoute.path}
                          element={childRoute.element}
                        />
                      ))}
                  </Route>
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
