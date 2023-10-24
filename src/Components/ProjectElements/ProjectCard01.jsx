import React, { useLayoutEffect, useRef, useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const ProjectCard01 = ({ data }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const monitorWidth = windowSize.current[0];

  // console.log(monitorWidth);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  let elHeight = Number(dimensions.height);
  // console.log(typeof elHeight);

  const { img, city, title, tag, id } = data;

  return (
    <div ref={targetRef} className={`element-item ${tag}`}>
      <div className="teambox">
        <LazyLoad height={monitorWidth >= 1536 ? 350 : 460} once>
          <img src={img} alt="" />
        </LazyLoad>

        <div className="teambox_inner">
          <div className="teambox_intro">
            <div className="team_flex team_size">
              <h6>{city}</h6>
              <h5>
                <Link to={`/project/${id}`}>{title}</Link>
              </h5>
              {/* <br />
                            <p>width: {dimensions.width}</p>
                            <p>height: {dimensions.height}</p> */}
              {/* <h2>Width: {windowSize.current[0]}</h2>
                            <h2>Height: {windowSize.current[1]}</h2> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard01;
