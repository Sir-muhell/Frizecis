import React from "react";

const TestimonialCard01 = ({ data }) => {
  const { img, name, country } = data;
  return (
    <div className="item">
      <div className="testibox1">
        <div className="testibox_inner">
          <div className="testi-content">
            <ul>
              <li className="text"></li>
            </ul>
            <p>
              Frizecis Global truly embodies the values they've outlined in
              their vision. They have consistently demonstrated their commitment
              to becoming a quality-oriented leader in construction and real
              estate development. Their ability to adapt and provide top-notch
              products that satisfy their customers is commendable.
            </p>
          </div>
          <div className="testi-top">
            <div className="testi-img">
              <img src={img} alt="" />
            </div>
            <div className="testi-info">
              <h4>{name}</h4>
              <h6>{country}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard01;
