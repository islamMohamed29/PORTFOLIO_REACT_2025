import React from "react";
import { ParentHead } from "../Components/ParentHead";
import { ParentAbout } from "../Components/ParentAbout";
import { Services } from "../Components/Services";
import { Work } from "../Components/Work";
import { TimeLine } from "../Components/TimeLine";
import { Contact } from "../Components/Contact";

export const Home = () => {
  return (
    <>
      <ParentHead />
      <ParentAbout />
      <Services />
      <Work />
      <TimeLine />
      <Contact />
    </>
  );
};
