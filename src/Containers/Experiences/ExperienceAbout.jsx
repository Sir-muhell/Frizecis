import React from "react";
import AboutBelowContent02 from "../../Components/ExperienceBlocks/AboutBelowContent02";

const ExperienceAbout = () => {
  const headerData = {
    heading: "Building Dream into Reality",
    subheading: "ABOUT Frizecis Global Nig. Ltd.",
  };

  const ExpericenData = [
    {
      id: "1",
      title: "Our Mission",
      description:
        "Frizecis Global is the safe, reliable and cost effective builder company. We offer best construction Services.",
      img: "images/about/t1.png",
    },
    {
      id: "2",
      title: "Our Vision",
      description:
        "Frizecis Global is the safe, reliable and cost effective builder company. We offer best construction Services.",
      img: "images/about/t2.png",
    },
  ];
  return (
    <div className="experience">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="group_image_holder type_1">
              <div className="expe_box">
                <div className="expe_box_inner">
                  {/* <h1>35</h1>
                  Years of Experience */}
                </div>
              </div>
              <img src="images/about/1.png" alt="" />
              <div className="object">
                <img src="images/about/3.png" alt="About" />
                <img src="images/about/3.png" alt="About" />
                <img src="images/about/3.png" alt="About" />
                <img src="images/about/s1.png" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="experience_content about">
              <div className="section_header">
                <h6 className="section_sub_title">{headerData.subheading}</h6>
                <h1 className="section_title">{headerData.heading}</h1>
                <p className="section_desc">
                  FRIZECIS GLOBAL NIGERIA LIMITED is a well established building
                  construction firm structured to provide our customers with
                  high- quality products (Architectural, MEP & structural
                  designs) for building construction from inception to handover
                  and also promoting TOTAL QUALITY MANAGEMENT PROTOCOLS to
                  popularize the concept of "Customer Oriented" and "Improvement
                  of Production Quality," based on managerial visions.
                </p>
                <p className="section_desc" style={{ marginTop: "15px" }}>
                  We offer general contracting, construction management,
                  design-build and pro construction cleaning services for
                  projects of all signs, which include;
                </p>
                <ul
                  className="section_desc point_order"
                  style={{ marginTop: "15px" }}
                >
                  <li>Commercial </li>
                  <li>Education and Campus</li>
                  <li> Health care and life sciences </li>
                  <li>Hospitality and resort</li>
                  <li> Manufacturing and industrial Water treatment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12" style={{ marginTop: "25px" }}>
            <div className="experience_content about">
              <div className="section_header">
                <div className="about_below">
                  <div className="about_below_content">
                    <img src="images/about/t1.png" alt="" />
                    <div className="about_below_content_text">
                      <h5>Our Mission</h5>
                      <p>
                        Frizecis Global Nig. Ltd. is a well established building
                        construction firm.
                      </p>
                    </div>
                  </div>
                  <ul class="point_order">
                    <li>
                      To intensify our position as top market leader in inf
                      rastructure construction and real estate devel- opment
                      projects.
                    </li>
                    <li>
                      We aspire to become a “Quality-oriented Franchise" holding
                      our own unique quality management procedures and
                      professional external/internal quality audits throughout
                      the world.
                    </li>
                    <li>
                      We aim to become a company that can adapt and quickly
                      provide the products that will satisfy the customers.
                    </li>
                    <li>
                      We strive to become an innovator always providing
                      “something new, something different” in the market
                    </li>
                    <li>
                      We aim at creating a corporate culture where our
                      individual employees can exploit their personal characters
                      and capability to the fullest extent.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12" style={{ marginTop: "25px" }}>
            <div className="experience_content about">
              <div className="section_header">
                <div className="about_below">
                  <div className="about_below_content">
                    <img src="images/about/t2.png" alt="" />
                    <div className="about_below_content_text">
                      <h5>Our Vision</h5>
                      <p>
                        We serve with character and purpose that brings clients
                        satisfaction.
                      </p>
                    </div>
                  </div>
                  <p className="about_below_content_text">
                    To be the pre-eminent provider of pristine building
                    construction services by consistently improving the quality
                    of our methodologies and products. We seek to add value to
                    our client via innovation, foresight, integrity and passive
                    productivity while serving with character and purpose that
                    brings clients satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAbout;
