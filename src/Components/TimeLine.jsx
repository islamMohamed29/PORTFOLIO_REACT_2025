import React from "react";
import timeLine from "../locals/timeline.json";
export const TimeLine = () => {
  return (
    <div class="timeline mt-5" id="portfolio">
      <div class="container-fluid px-4">
        <div class="row">
          {/* Education  */}
          <div className="col-lg-6">
            <div class="timeline-title text-center">
              <h4>{timeLine.education.head}</h4>
            </div>
            <div class="timeline-gallery">
              {timeLine.education.data.map(
                (box) =>
                  box.isShow && (
                    <div
                      class={`timeline-box ${box.isSpecial && "special-box"}`}
                    >
                      <div class="mark"></div>
                      <div class="mark-light"></div>
                      <div class="head-box">
                        <div class="data d-flex justify-content-between align-items-center">
                          <h5>{box.title}</h5>
                          <div class="date">{box.date}</div>
                        </div>
                        <div class="field">{box.position}</div>
                      </div>
                      <p class="desc">{box.desc}</p>
                      {box.hasLink && (
                        <a href={box.linkSrc} class="link">
                          {box.linkTitle}
                        </a>
                      )}
                      {box.hasImage && (
                        <div class="image">
                          <img src={box.imageSrc} alt="route_logo_image" />
                        </div>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Work History  */}
          <div class="col-lg-6">
            <div class="timeline-title text-center">
              <h4>{timeLine.workHistory.head}</h4>
            </div>
            <div class="timeline-gallery">
              {timeLine.workHistory.data.map(
                (box) =>
                  box.isShow && (
                    <div
                      class={`timeline-box ${box.isSpecial && "special-box"}`}
                    >
                      <div class="mark"></div>
                      <div class="mark-light"></div>
                      <div class="head-box">
                        <div class="data d-flex justify-content-between align-items-center">
                          <h5>{box.title}</h5>
                          <div class="date">{box.date}</div>
                        </div>
                        <div class="field">{box.position}</div>
                      </div>
                      <p class="desc">{box.desc}</p>
                      {box.hasLink && (
                        <a href={box.linkSrc} class="link">
                          {box.linkTitle}
                        </a>
                      )}
                      {box.hasImage && (
                        <div class="image">
                          <img src={box.imageSrc} alt="route_logo_image" />
                        </div>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
