import React, { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";

const Header02 = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className="header header_color">
        <div className="middle_bar">
          <div className="container">
            <div className="middle_bar_inner">
              <div className="logo d-none d-sm-block">
                <a href="/" className="light_mode_logo">
                  <img src="images/logo.png" alt="logo" />
                </a>
                <a href="/" className="dark_mode_logo">
                  <img src="images/logo.png" alt="logo" />
                </a>
              </div>

              <div className="header_right_part">
                <div className="mainnav">
                  <ul className="main_menu">
                    <li className="menu-item  active">
                      <a href="/">Home</a>
                      {/* <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="/">Home One</a>
                        </li>
                        <li className="menu-item active">
                          <a href="/home-2">Home Two</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item ">
                      <a href="/services">Services</a>
                      {/* <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="/services">Service One</a>
                        </li>
                        <li className="menu-item">
                          <a href="/services-2">Service Two</a>
                        </li>
                        <li className="menu-item">
                          <a href="/service-details">Service Details</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item">
                      <a href="/project">Projects</a>
                      {/* <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="/project">Projects One</a>
                        </li>
                        <li className="menu-item">
                          <a href="/project-2">Peojects Two</a>
                        </li>
                        <li className="menu-item">
                          <a href="/project-details">Peojects Details</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item">
                      <a href="/about">About</a>
                    </li>

                    <li className="menu-item">
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="phone phn_color ">
                  <i
                    className="fa fa-phone d-none d-md-block"
                    aria-hidden="true"
                  ></i>
                  <div className="d-none d-md-block">
                    <span>Call Us Anytime</span>
                    <br />
                    <span className="phn_number">+234 814 0076 422</span>
                  </div>
                  <div className="logo d-block d-sm-none">
                    <a href="/" className="light_mode_logo">
                      <img src="images/logo.png" alt="logo" />
                    </a>
                    <a href="/" className="dark_mode_logo">
                      <img src="images/logo.png" alt="logo" />
                    </a>
                  </div>
                </div>
                {/* <div className="header_search" onClick={handleToggle}>
                  <button type="submit" className="form-control-submit">
                    <i className="ion-ios-search"></i>
                  </button>
                </div> */}
                {/* <div id="open_search" className={isActive ? null : "active"}>
                  <form className="search_form" action="search.php">
                    <input
                      type="text"
                      name="search"
                      className="keyword form-control"
                      placeholder="Search..."
                    />
                    <button type="submit" className="form-control-submit">
                      <i className="ion-ios-search"></i>
                    </button>
                  </form>
                </div> */}
                <button
                  className="ma5menu__toggle position-relative d-xl-none"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasHome"
                  aria-controls="offcanvasHome"
                >
                  <i className="ion-android-menu"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  );
};

export default Header02;
