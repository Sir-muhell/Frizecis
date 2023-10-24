import React from "react";
import { Controller, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard02 from "../../Components/TestimonialCards/TestimonialCard02";
import "./Testimonial.css";

const Testimonial02 = () => {
  const TestimonialData02 = [
    {
      id: "1",
      upperImg: "images/others/u_img_1.png",
      midImg: "images/logo192.png",
      name: "Name",
    },
    {
      id: "2",
      upperImg: "images/others/u_img_2.png",
      midImg: "images/logo192.png",
      name: "Name",
    },
    {
      id: "3",
      upperImg: "images/others/u_img_3.png",
      midImg: "images/logo192.png",
      name: "Name",
    },
  ];
  return (
    <div className="section testimonial2">
      {/* <div className="owl_testimonial2 owl-carousel owl-theme"> */}
      <Swiper
        // className="owl_testimonial2 owl-carousel owl-theme"
        modules={[Pagination, Controller]}
        effect={"slide"}
        slidesPerView={1}
        loop={true}
        controller={{ inverse: true }}
        // spaceBetween={50}
        centeredSlides={true}
        pagination={{
          // el: '.testimonial-pagination',
          clickable: true,
          // dynamicBullets: true,
        }}
      >
        {TestimonialData02.map((data) => (
          <SwiperSlide>
            <TestimonialCard02 key={data.id} data={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <!-- Add Pagination --> */}
      {/* <div className="testimonial-pagination"></div> */}
    </div>
  );
};

export default Testimonial02;
