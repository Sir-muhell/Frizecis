import React from "react";
import ServiceCard02_01 from "../../Components/ServiceCards/ServiceCard02_01";
import PaginationDiv from "../../Components/TeamElements/PaginationDiv";

const ServiceContainer01 = () => {
  const ServiceData01 = [
    {
      id: "1",
      img: "images/services/s4.png",
      img02: "images/services/Service_Hover_images/1.jpg",
      tag: "TURNKEY PROJECTS",
      title: "Frizecis Global specializes in Turnkey Projects.",
    },
    {
      id: "2",
      img: "images/services/s5.png",
      img02: "images/services/Service_Hover_images/2.jpg",
      tag: "EXTERNAL BUILDING CONSULTANTS (INCEPTION TO COMPLETION)",
      title:
        "Trust Frizecis Global for External Building Construction Consultancy from inception to completion.",
    },
    {
      id: "3",
      img: "images/services/s7.png",
      img02: "images/services/Service_Hover_images/3.jpg",
      tag: "ARCHITECTURAL DESIGNS",

      title: "Explore Innovative Architectural Designs with Frizecis Global.",
    },
    {
      id: "4",
      img: "images/services/s6.png",
      img02: "images/services/Service_Hover_images/4.jpg",
      tag: "STRUCTURAL DESIGN",
      title: "Frizecis Global excels in Structural Design expertise.",
    },
    {
      id: "5",
      img: "images/services/s4.png",
      img02: "images/services/Service_Hover_images/5.jpg",
      tag: "MECHANICAL AND ELECTRICAL DESIGN",
      title:
        "Comprehensive Mechanical and Electrical Designs by Frizecis Global.",
    },
    {
      id: "6",
      img: "images/services/s7.png",
      img02: "images/services/Service_Hover_images/5.jpg",
      tag: "PROCUREMENT & SUPPLY CHAIN MANAGEMENT",
      title: "Strategic Procurement and Supply Chain Solutions",
    },
  ];

  return (
    <div className="main_wrapper">
      <div className="section service services_inner_page">
        <div className="container">
          <div className="row">
            {ServiceData01.map((data) => (
              <ServiceCard02_01 key={data.id} data={data} />
            ))}

            {/* <PaginationDiv /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer01;
