import Isotope from "isotope-layout";
import React, { useEffect, useState } from "react";
import ProjectCard01 from "../../Components/ProjectElements/ProjectCard01";

const ProjectHome02 = () => {
  const ProjectHomeData02 = [
    {
      id: "10",
      img: "images/product/11/2.jpg",
      tag: "highrise residential",
      title: "Medina Hotel",
      city: "Lagos",
    },
    {
      id: "2",
      img: "images/product/9/1.png",
      tag: "highrise",
      title: "The Begonia",
      city: "Ikoyi, Lagos State",
    },
    {
      id: "3",
      img: "images/product/7/3.png",
      tag: "residential commercial",
      title: "Kingsway Towers",
      city: "Ikoyi, Lagos State",
    },
    {
      id: "4",
      img: "images/product/6/1.png",
      tag: "highrise commercial",
      title: "Irele Towers",
      city: "Ibeju Lekki, Lagos State",
    },
  ];

  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    Isotope.current = new Isotope(".grid", {
      itemSelector: ".element-item",
      percentPosition: true,
      // layoutMode: 'packery',
      // masonry: {
      //     columnWidth: '.grid-sizer'
      // },
      transformsEnabled: true,
      transitionDuration: "700ms",
      resize: true,
      fitWidth: true,
      // columnWidth: '.grid-sizer',
    });

    // cleanup
    return () => Isotope.current.destroy();
  }, []);

  // handling filter key change
  useEffect(() => {
    filterKey === "*"
      ? Isotope.current.arrange({ filter: `*` })
      : Isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <div className="project_iso project_iso_bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_header section_header_white text-center">
              <div className="shadow_icon">
                <img src="images/shadow_icon4.png" alt="" />
              </div>
              <h6 className="section_sub_title">OUR PROJECTS</h6>
              <h1 className="section_title">Our Most Popular Projects</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="button-group filters-button-group button_color">
              <button className="button" onClick={handleFilterKeyChange("*")}>
                All <sup className="filter-count"></sup>
              </button>

              <div className="grid grid-4">
                {ProjectHomeData02.map((data) => (
                  <ProjectCard01 key={data.id} data={data} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 box_bottom">
            <p>
              <a href="/project">Click Here</a>
            </p>
            <p>to see more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHome02;
