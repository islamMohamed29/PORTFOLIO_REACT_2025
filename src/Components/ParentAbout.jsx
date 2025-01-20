import React from "react";
import stats from "../locals/about.json";
export const ParentAbout = () => {
  const { data } = stats;
  return (
    <div className="parent-about px-3 py-4">
      <div className="container-fluid">
        <div className="row g-3 text-center">
          {data.map((ele, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="box">
                <span className="counter">{ele.counter}</span>
                <h6 className="title">{ele.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
