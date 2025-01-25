import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowRightMenu } from "../redux/slices/layout-slice";

export const RightMenu = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { showRightMenu } = state.layout;

  return (
    <div class="parent-menu">
      <div class="menu-bar">
        <div class="menu-frame">
          <div class="header-menu">
            <i
              class="fa-solid fa-bars"
              onClick={() => dispatch(setShowRightMenu(!showRightMenu))}
            ></i>
          </div>
        </div>
      </div>
      <div
        class="list"
        style={{
          ...(showRightMenu && { right: "0" }),
        }}
      >
        <ul class="list-unstyled">
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
        <div class="close">
          {showRightMenu && (
            <i
              class="fa-solid fa-xmark"
              onClick={() => dispatch(setShowRightMenu(!showRightMenu))}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};
