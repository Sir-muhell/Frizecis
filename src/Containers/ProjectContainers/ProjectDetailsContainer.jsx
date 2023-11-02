import $ from "jquery";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../Components/common/PageHeader";
import MobileNav from "../../Components/common/MobileNav/MobileNav";
import ProjectMobileNav from "./ProjectMobileNav";

const ProjectDetailsContainer = () => {
  useEffect(() => {
    // accordion
    $(".accordion").on("click", ".accordion_tab", function () {
      $(this).next().slideDown();
      $(".accordion_info").not($(this).next()).slideUp();
    });

    $(".accordion").on("click", ".item", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }, []);

  const { id } = useParams(); // Get the project ID from the URL
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  // Define an array of project details
  const projectDetailsData = [
    {
      id: "1",
      img: "../images/product/1/3.png",
      img2: "../images/product/1/1.png",
      img3: "../images/product/1/2.png",
      tag: "residential business",
      title: "Afren Towers",
      city: "Eko Atlantic City, Lagos",
      client: "Frizecis Global",
      status: "Completed",
      role: "Contractor",
    },
    {
      id: "2",
      img: "../images/product/2/1.png",
      img2: "../images/product/2/3.png",
      img3: "../images/product/2/2.png",
      tag: "highrise",
      title: "Apel Office Complex",
      city: "Ikoyi, Lagos State",
      client: "Telisol Limited",
      status: "Under Construction",
      role: "Quality Control/Quality Assurance ",
    },
    {
      id: "3",
      img: "../images/product/3/1.png",
      img2: "../images/product/3/3.png",
      img3: "../images/product/3/2.png",
      tag: "residential commercial",
      title: "Azuri Towers",
      city: "Eko Atlantic City, Lagos",
      client: "Frizecis Global",
      status: "Completed",
      role: "Contractor ",
    },
    {
      id: "4",
      img: "../images/product/4/1.png",
      img2: "../images/product/4/2.png",
      img3: "../images/product/4/3.png",
      tag: "highrise commercial",
      title: "Eko Towers",
      city: "Victoria Island, Lagos State",
      client: "Frizecis Global",
      status: "Completed",
      role: "Contractor ",
    },
    {
      id: "5",
      img: "../images/product/6/1.png",
      img2: "../images/product/6/2.png",
      img3: "../images/product/6/3.png",
      tag: "residential",
      title: "Irele Towers",
      city: "Ibeju Lekki, Lagos State",
      client: "Telisol Limited",
      status: "Under Construction",
      role: "Quality Control/Quality Assurance ",
    },
    {
      id: "6",
      img: "../images/product/7/3.png",
      img2: "../images/product/7/2.png",
      img3: "../images/product/7/1.png",
      tag: "residential",
      title: "Kingsway Towers",
      city: "Ikoyi, Lagos State",
      client: "Telisol Limited",
      status: "Completed",
      role: "Contractor",
    },
    {
      id: "7",
      img: "../images/product/8/1.png",
      img2: "../images/product/8/2.png",
      img3: "../images/product/8/3.png",
      tag: "business residential",
      title: "Ocean Parade Towers",
      city: "Banana Island, Lagos State",
      client: "Frizecis Global",
      status: "Completed",
      role: "Contractor",
    },
    {
      id: "8",
      img: "../images/product/9/1.png",
      img2: "../images/product/9/3.png",
      img3: "../images/product/9/2.png",
      tag: "commercial residential",
      title: "The Begonia",
      city: "Ikoyi, Lagos State",
      client: "Telisol Limited",
      status: "Under Construction",
      role: "Quality Control/Quality Assurance",
    },
    {
      id: "9",
      img: "../images/product/10/1.png",
      img2: "../images/product/10/3.png",
      img3: "../images/product/10/2.png",
      tag: "highrise residential",
      title: "Zirconia Height",
      city: "Lagos",
      client: "Telisol Limited",
      status: "Under Construction",
      role: "Quality Control/Quality Assurance",
    },
    {
      id: "10",
      img: "../images/product/11/2.jpg",
      img2: "../images/product/11/1.jpg",
      img3: "../images/product/11/3.jpg",
      tag: "highrise residential",
      title: "Medina Hotel",
      city: "Lagos",
      client: "Telisol Limited",
      status: "Under Construction",
      role: "Contractor",
    },
    // Add more project details as needed
  ];

  // Find the project details that match the ID from the URL
  const projectDetails = projectDetailsData.find(
    (project) => project.id === id
  );

  // Check if a project with the specified ID exists
  if (!projectDetails) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <header className="header header_color">
        <div className="middle_bar">
          <div className="container">
            <div className="middle_bar_inner">
              <div className="logo d-none d-sm-block">
                <a href="/" className="light_mode_logo">
                  <img src="../images/logo.png" alt="logo" />
                </a>
                <a href="/" className="dark_mode_logo">
                  <img src="../images/logo.png" alt="logo" />
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
                      <img src="../images/logo.png" alt="logo" />
                    </a>
                    <a href="/" className="dark_mode_logo">
                      <img src="../images/logo.png" alt="logo" />
                    </a>
                  </div>
                </div>
                {/* <div className="header_search" onClick={handleToggle}>
                  <button type="submit" className="form-control-submit">
                    <i className="ion-ios-search"></i>
                  </button>
                </div> */}
                <div id="open_search" className={isActive ? null : "active"}>
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
                </div>
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
      <ProjectMobileNav />
      <PageHeader
        activeClass02="active"
        routeName01="Projects"
        routeName02="Projects Details"
        heading={projectDetails.title}
      />
      <div class="main_wrapper">
        <div class="container">
          <div class="project_details section">
            <div class="row">
              <div class="col-lg-8 col-md-12">
                <div class="project_details_inner">
                  <div class="post_img">
                    <img src={projectDetails.img} alt="Image" />
                  </div>
                  <div class="post_content">
                    <div class="post_header">
                      {/* <h3 class="post_title">{projectDetails.title}</h3> */}
                    </div>
                    <div class="fulltext">
                      {/* <p>
                        The company has established a 2030 vision to reflect the
                        diverse communities in which we build, and to achieve
                        equal representation at all levels of the company.
                        Reaching the 2030 vision starts with how the company
                        recruits and grows a talent pipeline. Efforts are
                        focused on creatin
                      </p>

                      <p>
                        As the world continues to fight COVID-19 some property
                        owners are searching for way they can improve the
                        security of their buildings whilst decreasing the spread
                        of germs and bacteria. The following 3 hygienic security
                        solutions are suitable for use within high traffic areas
                        across both residential and commercial buildings.
                      </p>

                      <h4 class="widget_title">
                        Project Features
                        <span class="title_line"></span>
                      </h4>
                      <p class="margin_o_para">
                        The following problems may arise withe house key
                        duplication -
                      </p>
                      <ul class="point_order">
                        <li>
                          As the world continues to fight COVID-19 some property
                          owners
                        </li>
                        <li>
                          improve the security of their buildings whilst
                          decreasing the spread
                        </li>
                        <li>
                          following 3 hygienic security solutions are suitable
                          for use within
                        </li>
                        <li>
                          esidential and commercial buildings improve the
                          security
                        </li>
                      </ul> */}

                      <div class="post_gallery">
                        <div class="row">
                          <div class="col-lg-6 col-sm-6">
                            <img src={projectDetails.img2} alt="img" />
                          </div>
                          <div class="col-lg-6 col-sm-6">
                            <img src={projectDetails.img3} alt="img" />
                          </div>
                        </div>
                      </div>

                      {/* <p>
                        Burglars prefer to work in the cover of dark. By setting
                        up lighting around your garage can aid in keeping
                        burglars at bay. Install a sensor light to turn on as
                        you enter the driveway and approach the garage. Not only
                        will it prove a burglar deterrent it will also assist
                        you with seeing better to come home late.
                      </p>

                      <h4 class="widget_title">
                        Service Steps
                        <span class="title_line"></span>
                      </h4>
                      <p>
                        Burglars prefer to work in the cover of dark. By setting
                        up lighting around your garage can aid in keeping
                        burglars at bay. Install a sensor light to turn on as
                        you enter the driveway and approach the garage. Not only
                        will it prove a burglar deterrent it will also assist
                        you with seeing better to come home late.
                      </p>
                      <div class="accordion">
                        <div class="item active">
                          <div class="accordion_tab">
                            <h2 class="accordion_title">
                              Floor Plan Descriptions
                            </h2>
                            <span class="accordion_tab_icon">
                              <i class="open_icon ion-ios-arrow-down"></i>
                              <i class="close_icon ion-ios-arrow-up"></i>
                            </span>
                          </div>
                          <div class="accordion_info">
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur odit aut fugit, sed magni dolore squi
                            ratione voluptatem sequi nesciunt. Neque porro
                            quisquam qui dolorem ipsum quia dolor sit amet,
                            consecteturadipisci velit options can also be used
                            in conjunction with controlling the access.
                          </div>
                        </div>

                        <div class="item">
                          <div class="accordion_tab">
                            <h2 class="accordion_title">
                              Construction Technology Used
                            </h2>
                            <span class="accordion_tab_icon">
                              <i class="open_icon ion-ios-arrow-down"></i>
                              <i class="close_icon ion-ios-arrow-up"></i>
                            </span>
                          </div>
                          <div class="accordion_info">
                            Aenean massa cum sociis natoque penatibus et magnis
                            dis parturient montes nascetur ridiculus mus. Donec
                            quam felis ultricies pellentesque eu, pretium quis
                            sem. Nulla consequat massa quis enim. Donec pede
                            justo, fringilla vel aliquet nec vulputate eget. In
                            enim justo rhoncus ut imperdiet venenatis vitae
                            justo.
                          </div>
                        </div>

                        <div class="item">
                          <div class="accordion_tab">
                            <h2 class="accordion_title">
                              Thoughts Behind the projects
                            </h2>
                            <span class="accordion_tab_icon">
                              <i class="open_icon ion-ios-arrow-down"></i>
                              <i class="close_icon ion-ios-arrow-up"></i>
                            </span>
                          </div>
                          <div class="accordion_info">
                            Aenean massa cum sociis natoque penatibus et magnis
                            dis parturient montes nascetur ridiculus mus. Donec
                            quam felis ultricies pellentesque eu, pretium quis
                            sem. Nulla consequat massa quis enim. Donec pede
                            justo, fringilla vel aliquet nec vulputate eget. In
                            enim justo rhoncus ut imperdiet venenatis vitae
                            justo.
                          </div>
                        </div>

                        <div class="item">
                          <div class="accordion_tab">
                            <h2 class="accordion_title">
                              Construction Technology Used
                            </h2>
                            <span class="accordion_tab_icon">
                              <i class="open_icon ion-ios-arrow-down"></i>
                              <i class="close_icon ion-ios-arrow-up"></i>
                            </span>
                          </div>
                          <div class="accordion_info">
                            Aenean massa cum sociis natoque penatibus et magnis
                            dis parturient montes nascetur ridiculus mus. Donec
                            quam felis ultricies pellentesque eu, pretium quis
                            sem. Nulla consequat massa quis enim. Donec pede
                            justo, fringilla vel aliquet nec vulputate eget. In
                            enim justo rhoncus ut imperdiet venenatis vitae
                            justo.
                          </div>
                        </div>
                      </div>

                      <p>
                        By automating your doors this removes the need for
                        people touching handles or surfaces. Both of the above
                        options can also be used in conjunction with controlling
                        the access of your automatic doors. For example, a
                        touch-less sensor can be installed to control the
                        opening of the door.
                      </p>

                      <p>
                        Automatic doors can be programmed to be activate during
                        certain times and remain locked at a others. Door
                        openers/closer can also be automated for use in some
                        high traffic areas.
                      </p>

                      <h4 class="widget_title">
                        Clients Testimonial
                        <span class="title_line"></span>
                      </h4>

                      <div class="testibox1">
                        <div class="testibox_inner">
                          <div class="testi-content">
                            <p>
                              Lorem ipsum dolor sit ametadipiscing elit sed
                              eiusmod tempor incididunt ut labore et dolore
                              magna.adipiscing sed do eiusmod tempor incididunt
                              ut labore et dolore magna. adipiscing elit sed
                            </p>
                          </div>
                          <div class="testi-top">
                            <div class="testi-img">
                              <img src="images/reviewer1.png" alt="" />
                            </div>
                            <div class="testi-info">
                              <h4>Johnathon Doe</h4>
                              <h6>New York</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="share_tag">
                        <div class="post_footer">
                          <div class="post_share">
                            <ul class="share_list new_share">
                              <li>Share:</li>
                              <li class="facebook">
                                <a href="#">
                                  <i class="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li class="twitter">
                                <a href="#">
                                  <i class="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li class="pinterest">
                                <a href="#">
                                  <i class="fa fa-pinterest"></i>
                                </a>
                              </li>
                              <li class="instagram">
                                <a href="#">
                                  <i class="fa fa-dribbble"></i>
                                </a>
                              </li>
                              <li class="linkedin">
                                <a href="#">
                                  <i class="fa fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div id="tags-1" class="widget widget_tag_cloud">
                          <div class="sidebar_tags">
                            <ul class="tag_list">
                              <li>
                                <a href="about.html">Builder</a>
                              </li>
                              <li>
                                <a href="services.html">Trendy</a>
                              </li>
                              <li>
                                <a href="project.html">Tees</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="inner_posts">
                        <div class="inner-post prev_post">
                          <img src="images/blog/p1.png" alt="img" />
                          <div class="post_block">
                            <a class="link_to" href="blog-1.html">
                              Previous Post
                            </a>
                            <h4>
                              <a href="#">NewYork Apertment</a>
                            </h4>
                          </div>
                        </div>
                        <div class="inner-post prev_post">
                          <img src="images/blog/p2.png" alt="img" />
                          <div class="post_block">
                            <a class="link_to" href="blog-2.html">
                              Next Post
                            </a>
                            <h4>
                              <a href="#">Under Construction</a>
                            </h4>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-12">
                <div class="sidebar">
                  <div class="project_info">
                    <div class="project_info_bg">
                      <div class="project_info_header">
                        <h4>Project Information</h4>
                      </div>
                      <div class="project_info_details_bg">
                        <div class="project_info_details">
                          <h5>Project Name</h5>
                          <p>{projectDetails.title}</p>
                        </div>
                        <div class="project_info_details">
                          <h5>Client Name</h5>
                          <p>{projectDetails.client}</p>
                        </div>
                        <div class="project_info_details">
                          <h5>Location</h5>
                          <p>{projectDetails.city}</p>
                        </div>
                        <div class="project_info_details">
                          <h5>Role</h5>
                          <p style={{ float: "right" }}>
                            {projectDetails.role}
                          </p>
                        </div>
                        <div class="project_info_details">
                          <h5>Status</h5>
                          <p>{projectDetails.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <div
                  className="footer_contact_inner"
                  style={{ display: "flex" }}
                >
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
                        src="../images/logo192.png"
                        style={{ width: "50px" }}
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <p>
                    FRIZECIS GLOBAL NIGERIA LIMITED provides professional
                    building construction processes and quality management
                    system for building construction by providing pristine
                    solutions through understanding our customers, developing
                    new methodologies, and engaging our people in a culture of
                    continuous improvement while respecting the structural
                    design specifications.
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
    </>
  );
};

export default ProjectDetailsContainer;
