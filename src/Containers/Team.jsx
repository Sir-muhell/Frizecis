import React from "react";
import { Controller, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "../Components/TeamElements/TeamCard";

const Team = (props) => {
  const TeamData = [
    {
      id: "1",
      img: "images/team/team-1.jpg",
      tag: "MANAGING DIRECTOR",
      name: "Engr. NZEH, C. Frank (MSc, B.Eng., MNSE, GHSEP, TQMSP, COREN)",
      linkedin:
        "https://www.linkedin.com/in/nzeh-frank-msc-b-eng-coren-m-n-s-e-g-h-s-e-q-m-s-p-42b58079/",
    },
    {
      id: "2",
      img: "images/logo192.png",
      tag: "Technical Director",
      name: "Atef Atallah",
      linkedin:
        "https://www.linkedin.com/in/atef-atallah-89095833/?originalSubdomain=ng",
    },
  ];
  return (
    <div className={`team ${props.pb}`}>
      <div className="container">
        <div className="section_header text-center">
          <div className="shadow_icon">
            <img src="images/shadow_icon5.png" alt="" />
          </div>
          <h6 className="section_sub_title">OUR DIRECTORS</h6>
          <h1 className="section_title">Meet Our Directors</h1>
          {/* <p className="section_desc">
            Frizecis Global is the best constructioncompany. It has best team
            who are provideing best service possible.
          </p> */}
        </div>
        <div className="row">
          <div className="col">
            <Swiper
              className="owl_team owl-carousel owl-theme"
              modules={[Pagination, Navigation, Controller]}
              // slidesPerView={3}
              breakpoints={{
                640: {
                  width: 576,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
              spaceBetween={50}
              loop={true}
              // centeredSlides={true}
              controller={{ inverse: true }}
              // pagination={{
              //     el: '.swiper-pagination',
              //     clickable: true,
              // }}
              navigation={{
                prevEl: ".owl-prev .disabled",
                nextEl: ".owl-next",
              }}
            >
              {TeamData.map((data) => (
                <SwiperSlide>
                  <TeamCard key={data.id} data={data} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <!-- Add Buttons --> */}
            {/* <div className="swiper-navigation">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div> */}

            {/* <!-- Add Buttons --> */}
            {/* <div className="owl-nav">
                            <button type="button" role="presentation" className="owl-prev disabled"><i className="fa fa-long-arrow-left"></i></button>
                            <button type="button" role="presentation" className="owl-next"><i className="fa fa-long-arrow-right"></i></button>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
