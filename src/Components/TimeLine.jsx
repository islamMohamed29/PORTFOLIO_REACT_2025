import React from "react";
import timeLine from "../locals/timeline.json";
export const TimeLine = () => {
  return (
    <div className="timeline mt-5" id="portfolio">
      <div className="container-fluid px-4">
        <div className="row">
          {/* Education  */}
          <div className="col-lg-6">
            <div className="timeline-title text-center">
              <h4>{timeLine.education.head}</h4>
            </div>
            <div className="timeline-gallery">
              {timeLine.education.data.map(
                (box, index) =>
                  box.isShow && (
                    <div
                      key={index}
                      className={`timeline-box ${
                        box.isSpecial && "special-box"
                      }`}
                    >
                      <div className="mark"></div>
                      <div className="mark-light"></div>
                      <div className="head-box">
                        <div className="data d-flex justify-content-between align-items-center">
                          <h5>{box.title}</h5>
                          <div className="date">{box.date}</div>
                        </div>
                        <div className="field">{box.position}</div>
                      </div>
                      <p className="desc">{box.desc}</p>
                      {box.hasLink && (
                        <a href={box.linkSrc} className="link">
                          {box.linkTitle}
                        </a>
                      )}
                      {box.hasImage && (
                        <div className="image">
                          <img src={box.imageSrc} alt="route_logo_image" />
                        </div>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Work History  */}
          <div className="col-lg-6">
            <div className="timeline-title text-center">
              <h4>{timeLine.workHistory.head}</h4>
            </div>
            <div className="timeline-gallery">
              {timeLine.workHistory.data.map(
                (box, index) =>
                  box.isShow && (
                    <div
                      key={index}
                      className={`timeline-box ${
                        box.isSpecial && "special-box"
                      }`}
                    >
                      <div className="mark"></div>
                      <div className="mark-light"></div>
                      <div className="head-box">
                        <div className="data d-flex justify-content-between align-items-center">
                          <h5>{box.title}</h5>
                          <div className="date">{box.date}</div>
                        </div>
                        <div className="field">{box.position}</div>
                      </div>
                      <p className="desc">{box.desc}</p>
                      {box.hasLink && (
                        <a href={box.linkSrc} className="link">
                          {box.linkTitle}
                        </a>
                      )}
                      {box.hasImage && (
                        <div className="image">
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
