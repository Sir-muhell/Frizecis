import React from "react";
import PageHeader from "../Components/common/PageHeader";
import CommunicationCard from "../Components/ContactElements/CommunicationCard";
import Map from "../Components/ContactElements/Map";
import Banner from "../Containers/Banner";

const ContactPage = () => {
  const ContactData = [
    {
      id: "1",
      iconClass: "ion-ios-telephone-outline",
      infoBody01: "Phone No",
      infoBody02: "+234 806 243 1888",
      infoBody03: "+234 808 944 7951",
    },
    {
      id: "2",
      iconClass: "fa fa-envelope-o",
      infoBody01: "Email Address",
      infoBody02: "Frizecis@gmail.com",
      infoBody03: "",
    },
    {
      id: "3",
      iconClass: "fa fa-map-marker",
      infoBody01: "Office Address",
      infoBody02:
        "3, Segun Ogunwale Street, Off S.Eze Crescent, Igando, Lagos.",
      infoBodyClass: "d-none",
    },
  ];

  return (
    <>
      <PageHeader
        activeClass01="active"
        activeClass02="d-none"
        routeName01="Contact Us"
        heading="Contact Us"
      />

      <div className="main_wrapper">
        {/* <div className="section">
          <div className="container">
            <div className="gmapbox">
              <div id="googleMap" className="map">
                <Map />
              </div>
            </div>
          </div>
        </div> */}
        <div className="contact_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="keepintouch_3">
                  {ContactData.map((data) => (
                    <CommunicationCard key={data.id} data={data} />
                  ))}
                </div>
              </div>
              <div className="col-lg-7 col-md-7 offset-lg-1">
                <div className="contact_us_1">
                  <div className="section_header">
                    <h6 className="section_sub_title">Contact Us</h6>
                    <h1 className="section_title">
                      Want to Ask anything?
                      <br />
                      Send Us a Mail Anytime
                    </h1>
                  </div>
                  <form
                    className="contact_form"
                    action="contact.php"
                    method="post"
                  >
                    <div className="form-container">
                      <div className="row">
                        <div className="col-md-6 col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Your Name*"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Email Address*"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="phone"
                              className="form-control"
                              placeholder="Phone No"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="subject"
                              className="form-control"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control"
                              placeholder="Message Here*"
                              required=""
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group">
                            <input
                              className="button"
                              type="submit"
                              value="Send Mail"
                              name="submit"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Banner
          title="Do you need to make further enquires about our services? Call us."
          heading="Call Us Anytime"
          phone="(+234) 806 243 1888"
          bannerType="banner banner_bg_color"
        />
      </div>
    </>
  );
};

export default ContactPage;
