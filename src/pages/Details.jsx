import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import works from "../locals/works.json";
export const Details = () => {
  const [work, setWork] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let workForShow = works.projects.find((work) => work.id === parseInt(id));

    setWork(workForShow);
  }, [id]);

  return (
    <div className="work_details">
      <div className="image">
        <img className="image_work" src={work?.image} alt="" />
      </div>
    </div>
  );
};
