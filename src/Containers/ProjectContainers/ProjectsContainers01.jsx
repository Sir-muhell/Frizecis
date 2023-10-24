import Isotope from "isotope-layout";
import React, { useEffect, useState } from "react";
import ProjectCard01 from "../../Components/ProjectElements/ProjectCard01";
import PaginationDiv from "../../Components/TeamElements/PaginationDiv";

const ProjectsContainers01 = () => {
  const ProjectData01 = [
    {
      id: "1",
      img: "images/product/1/3.png",
      tag: "residential business",
      title: "Afren Towers",
      city: "Eko Atlantic City, Lagos",
    },
    {
      id: "2",
      img: "images/product/2/1.png",
      tag: "highrise",
      title: "Apel Office Complex",
      city: "Ikoyi, Lagos State",
    },
    {
      id: "3",
      img: "images/product/3/1.png",
      tag: "residential commercial",
      title: "Azuri Towers",
      city: "Eko Atlantic City, Lagos",
    },
    {
      id: "4",
      img: "images/product/4/1.png",
      tag: "highrise commercial",
      title: "Eko Towers",
      city: "Victoria Island, Lagos State",
    },
    {
      id: "5",
      img: "images/product/6/1.png",
      tag: "residential",
      title: "Irele Towers",
      city: "Ibeju Lekki, Lagos State",
    },
    {
      id: "6",
      img: "images/product/7/3.png",
      tag: "residential",
      title: "Kingsway Towers",
      city: "Ikoyi, Lagos State",
    },
    {
      id: "7",
      img: "images/product/8/1.png",
      tag: "business residential",
      title: "Ocean Parade Towers",
      city: "Banana Island, Lagos State",
    },
    {
      id: "8",
      img: "images/product/9/1.png",
      tag: "commercial residential",
      title: "The Begonia",
      city: "Ikoyi, Lagos State",
    },
    {
      id: "9",
      img: "images/product/10/1.png",
      tag: "highrise residential",
      title: "Zirconia Height",
      city: "Lagos",
    },
    {
      id: "10",
      img: "images/product/11/2.jpg",
      tag: "highrise residential",
      title: "Medina Hotel",
      city: "Lagos",
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
    <div className="main_wrapper">
      <div className="project_iso section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="button-group filters-button-group button_color">
                <button className="button" onClick={handleFilterKeyChange("*")}>
                  All <sup className="filter-count"></sup>
                </button>
                {/* <button
                  className="button"
                  onClick={handleFilterKeyChange("commercial")}
                >
                  Commercial <sup className="filter-count"></sup>
                </button>
                <button
                  className="button"
                  onClick={handleFilterKeyChange("highrise")}
                >
                  Highrise <sup className="filter-count"></sup>
                </button>
                <button
                  className="button"
                  onClick={handleFilterKeyChange("residential")}
                >
                  Residential <sup className="filter-count"></sup>
                </button>
                <button
                  className="button"
                  onClick={handleFilterKeyChange("business")}
                >
                  Business <sup className="filter-count"></sup>
                </button> */}
              </div>

              <div className="grid grid-4 gutter-15">
                {ProjectData01.map((data) => (
                  <ProjectCard01 key={data.id} data={data} />
                ))}
              </div>
            </div>

            {/* <PaginationDiv /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainers01;
