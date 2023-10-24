import React from "react";
import { Controller, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard01 from "../../Components/TestimonialCards/TestimonialCard01";
// import './Testimonial.css';

const Testimonial01 = (props) => {
  const TestimonialData01 = [
    {
      id: "1",
      img: "images/logo192.png",

      name: "Name",
    },
    {
      id: "2",
      img: "images/logo192.png",

      name: "Name",
    },
    {
      id: "3",
      img: "images/logo192.png",
    },
    {
      id: "4",
      img: "images/logo192.png",

      name: "Name",
    },
    {
      id: "5",
      img: "images/logo192.png",

      name: "Name",
    },
  ];
  return (
    <div className={`testimonial ${props.pb} `}>
      <div className="container">
        <div className="section_header text-center">
          <div className="shadow_icon">
            <img src="images/shadow_icon3.png" alt="" />
          </div>
          <h6 className="section_sub_title">Clients testimonial</h6>
          <h1 className="section_title">What our clients say about us</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              className="owl_testimonial1 owl-carousel owl-theme"
              modules={[Pagination, Controller]}
              effect={"slide"}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
              loop={true}
              controller={{ inverse: true }}
              spaceBetween={50}
              // centeredSlides={true}
              pagination={{
                el: ".testimonial-pagination",
                clickable: true,
                // dynamicBullets: true,
              }}
            >
              {TestimonialData01.map((data) => (
                <SwiperSlide>
                  <TestimonialCard01 key={data.id} data={data} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <!-- Add Pagination --> */}
            <div className="testimonial-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial01;
