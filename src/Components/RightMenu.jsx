import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowRightMenu } from "../redux/slices/layout-slice";

export const RightMenu = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { showRightMenu } = state.layout;

  return (
    <div className="parent-menu">
      <div className="menu-bar">
        <div className="menu-frame">
          <div className="header-menu">
            <i
              className="fa-solid fa-bars"
              onClick={() => dispatch(setShowRightMenu(!showRightMenu))}
            ></i>
          </div>
        </div>
      </div>
      <div
        className="list"
        style={{
          ...(showRightMenu && { right: "0" }),
        }}
      >
        <ul className="list-unstyled">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>

          <li>
            <a href="#work">WORKS</a>
          </li>

          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div className="close">
          {showRightMenu && (
            <i
              className="fa-solid fa-xmark"
              onClick={() => dispatch(setShowRightMenu(!showRightMenu))}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};
