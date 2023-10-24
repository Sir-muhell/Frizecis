import React from "react";

const Footer02 = () => {
  return (
    <footer className="footer">
      <div className="footer_above2">
        <div className="container">
          <div className="row">
            <div className="footer_contact">
              <div className="footer_contact_inner">
                <div className="contact_icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact_content">
                  <h6>Our Address</h6>
                  <p>
                    3, Segun Ogunwale Street, <br />
                    Off S.Eze Crescent, Igando, Lagos.
                  </p>
                </div>
              </div>
              <div className="footer_contact_inner">
                <div className="contact_icon">
                  <i className="fa fa-envelope-o"></i>
                </div>
                <div className="contact_content">
                  <h6>Mail Address</h6>
                  <p>
                    <a
                      href="mailto:frizecis@gmail.com"
                      style={{ color: "#aeb6c2" }}
                    >
                      Frizecis@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer_contact_inner" style={{ display: "flex" }}>
                <div className="contact_icon">
                  <a href="https://www.instagram.com/frizecis_global_nig_ltd/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <div className="contact_icon">
                  <a href="https://twitter.com/frizecis">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="0.878em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                        fill="#de9752"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="footer_widget2">
                <div className="logo">
                  <a href="/">
                    <img
                      src="images/logo192.png"
                      style={{ width: "50px" }}
                      alt="Logo"
                    />
                  </a>
                </div>
                <p>
                  FRIZECIS GLOBAL NIGERIA LIMITED provides professional building
                  construction processes and quality management system for
                  building construction by providing pristine solutions through
                  understanding our customers, developing new methodologies, and
                  engaging our people in a culture of continuous improvement
                  while respecting the structural design specifications.
                </p>
                <div className="side_footer_social">
                  {/* <ul className="bottom_social">
                    <li className="facebook">
                      <a href="#">
                        <i className="ion-social-facebook"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="ion-social-twitter"></i>
                      </a>
                    </li>
                    <li className="dribbble">
                      <a href="#">
                        <i className="ion-social-dribbble-outline"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="#">
                        <i className="ion-social-instagram-outline"></i>
                      </a>
                    </li>
                    <li className="linkedin">
                      <a href="#">
                        <i className="ion-social-linkedin-outline"></i>
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-2 offset-md-2 col-md-4 col-sm-12">
              <div className="footer_widget2 footer_links">
                <h4 className="widget_title">Quick Links</h4>
                <div className="footer_nav">
                  <ul className="footer_menu">
                    <li className="menu-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="/about">About</a>
                    </li>
                    <li className="menu-item">
                      <a href="/projects">Projects</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-2 offset-md-2 col-md-4 col-sm-12">
              <div className="footer_widget2 footer_links">
                <div className="footer_nav" style={{ marginTop: "20px" }}>
                  <ul className="footer_menu">
                    <li className="menu-item">
                      <a href="/project-2">Services</a>
                    </li>
                    <li className="menu-item">
                      <a href="/project">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom footer_bottom_2">
        <div className="container">
          <div className="footer_bottom_inner">
            <div className="copyright">
              <p>
                &copy;2023{" "}
                <a href="https://frizecis.com">Frizecis Global Nig. Ltd.</a>
              </p>
            </div>
            <div className="footer_nav_bottom">
              {/* <ul>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul> */}
            </div>
            <div className="totop">
              <a href="#">
                <i className="ion-ios-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer02;
