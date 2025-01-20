import React from "react";
import header from "../locals/header.json";
export const ParentHead = () => {
  const { headTitle } = header;
  return (
    <div class="parent-head" id="home">
      <div class="container-fluid px-4">
        <div class="row">
          <div class="col-lg-12">
            <div class="img-head">
              <div class="img">
                <div class="img-content">
                  <h1 class="head-title">
                    <span>
                      {headTitle.firstSlice} <br />
                      {headTitle.secondSlice}
                    </span>
                  </h1>
                  <div class="head-text">
                    &lt;<i>code</i>&gt; I <span></span>| &lt;/<i>code</i>&gt;
                  </div>
                  <div class="head-button">
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
