import React from "react";

export const RightMenu = () => {
  return (
    <div class="parent-menu">
      <div class="menu-bar">
        <div class="menu-frame">
          <div class="header-menu">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div class="list">
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
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};
