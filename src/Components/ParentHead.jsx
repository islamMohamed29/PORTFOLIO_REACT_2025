import React from "react";
import header from "../locals/header.json";
export const ParentHead = () => {
  const { headTitle } = header;
  return (
    <div className="parent-head" id="home">
      <div className="container-fluid px-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="img-head">
              <div className="img">
                <div className="img-content">
                  <h1 className="head-title">
                    <span>
                      {headTitle.firstSlice} <br />
                      {headTitle.secondSlice}
                    </span>
                  </h1>
                  <div className="head-text">
                    &lt;<i>code</i>&gt; I <span></span>| &lt;/<i>code</i>&gt;
                  </div>
                  <div className="head-button">
                    <a href="#work">
                      <span>Explore now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
