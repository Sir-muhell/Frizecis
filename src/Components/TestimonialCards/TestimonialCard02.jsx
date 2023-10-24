import React from "react";

const TestimonialCard02 = ({ data }) => {
  const { name, upperImg, midImg } = data;
  return (
    <div className="item">
      <div className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial_image">
                <img
                  className="first_img"
                  src="images/others/Ellipse_55.png"
                  alt=""
                />
                <div className="image_color">
                  <img className="middle_img" src={midImg} alt="" />
                </div>
                <img
                  className="last_img"
                  src="images/others/Ellipse_56.png"
                  alt=""
                />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="testibox2">
                <div className="testibox_inner">
                  <div className="testi-content testibox_others">
                    <div className="upper_img"></div>

                    <p>
                      “ Frizecis Global truly embodies the values they've
                      outlined in their vision. They have consistently
                      demonstrated their commitment to becoming a
                      quality-oriented leader in construction and real estate
                      development. Their ability to adapt and provide top-notch
                      products that satisfy their customers is commendable.”
                    </p>
                  </div>
                  <div className="testi-top">
                    <div className="testi-info_others">
                      <h4>{name}</h4>
                      <h6>CEO, Company</h6>
                    </div>
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

export default TestimonialCard02;
