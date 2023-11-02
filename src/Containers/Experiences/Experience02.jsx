import React from "react";

const Experience02 = () => {
  const headerData = {
    heading: "providing pristine solutions ",
    subheading: "ABOUT Frizecis Global Nig. Ltd.",
    detail:
      "FRIZECIS GLOBAL NIGERIA LIMITED provides professional building construction processes and quality management system for building construction.",
    img: "images/about/call_img.png",
  };
  return (
    <div className="experience about_bg_image another_bg_image">
      <div className="upper_sm_img">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="group_image_holder">
                <img src="images/about/2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="experience_content experience_content_margin ">
                <div className="section_header">
                  <h6 className="section_sub_title">{headerData.subheading}</h6>
                  <h1 className="section_title">{headerData.heading}</h1>
                  <p className="short_detail">{headerData.detail}</p>
                  <p className="section_desc">
                    FRIZECIS GLOBAL NIGERIA LIMITED is a well established
                    building construction firm structured to provide our
                    customers with high- quality products (Architectural, MEP &
                    structural designs) for building construction from inception
                    to handover and also promoting TOTAL QUALITY MANAGEMENT
                    PROTOCOLS to popularize the concept of "Customer Oriented"
                    and "Improvement of Production Quality," based on managerial
                    visions.
                  </p>
                  <br />
                  <a className="button" href="/about">
                    Learn More
                  </a>

                  <div className="section_call">
                    <div className="call_image">
                      <img src={headerData.img} alt="" />
                    </div>
                    <div className="call_info">
                      <p>
                        Call Us anytime. We are <span>available 24/7</span>
                      </p>
                      <h4>
                        <a
                          href="tel: +234 814 0076 422"
                          style={{ color: "white" }}
                        >
                          +234 814 0076 422
                        </a>
                        <br />
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="floating_object floating_object_7">
            <img src="images/about/s_b.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience02;
