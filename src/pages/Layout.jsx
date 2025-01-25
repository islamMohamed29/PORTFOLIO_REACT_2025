import React from "react";
import { Outlet } from "react-router-dom";
import { ParentInfo } from "../Components/ParentInfo";
import { Footer } from "../Components/Footer";
import { RightMenu } from "../Components/RightMenu";

export const Layout = ({ ellipsisVertical, setEllipsisVertical }) => {
  return (
    <>
      <ParentInfo />
      <Outlet />
      <Footer />
      <RightMenu />
    </>
  );
};
