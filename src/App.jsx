import { useState } from "react";
import "./App.css";
import { ParentInfo } from "./Components/ParentInfo";
import { ParentHead } from "./Components/ParentHead";
import { ParentAbout } from "./Components/ParentAbout";
import { Services } from "./Components/Services";
import { Work } from "./Components/Work";
import { TimeLine } from "./Components/TimeLine";
import { RightMenu } from "./Components/RightMenu";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

function App() {
  const [ellipsisVertical, setEllipsisVertical] = useState(false);
  const handleClickEllipsisVertical = () => {
    setEllipsisVertical(true);
  };
  const [headerListMenu, setHeadListMenu] = useState(false);

  return (
    <Router>
      <div className="parent">
        <div class="go-top">
          <i class="fa-solid fa-angles-up"></i>
        </div>
        <div class="mobile-media">
          <i
            class="fa-solid fa-ellipsis-vertical"
            onClick={handleClickEllipsisVertical}
          ></i>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="parent-wrapper">
          <div className="parent-container">
            <ParentInfo
              ellipsisVertical={ellipsisVertical}
              setEllipsisVertical={setEllipsisVertical}
            />
            <div className="parent-content">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/details" element={<Details />} /> */}
                <Route path="/details/:id" element={<Details />} />
              </Routes>
              <Footer />
            </div>
            <RightMenu
              headerListMenu={headerListMenu}
              setHeadListMenu={setHeadListMenu}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
