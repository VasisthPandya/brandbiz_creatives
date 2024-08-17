import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-primary">
      <div className="container-fluid p-0 pt-2">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav align-items-center justify-content-between w-100">
            <li className="nav-item d-none d-lg-flex">
              <Link
                className="navbar-brand d-flex align-items-center gap-3"
                to="home"
                d
                smooth={true}
                duration={500}
              >
                <img
                  src="assets/images/BrandBiz_logo.png"
                  alt="Bootstrap"
                  width="50"
                  height="50"
                  className="mr-2"
                ></img>
                <p className="m-0 fs-3 fw-bold" style={{ color: "#050A30" }}>
                  BrandBiz Creatives
                </p>
              </Link>
            </li>
            <ul className="d-lg-flex gap-3 list-unstyled">
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold cursor-pointer"
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold cursor-pointer"
                  to="about"
                  smooth={true}
                  duration={500}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="social_media_marketing"
                      smooth={true}
                      duration={500}
                    >
                      Social Media Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer" 
                      to="graphic_design"
                      smooth={true}
                      duration={500}
                    >
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to=" ai_based_solution"
                      smooth={true}
                      duration={500}
                    >
                      Ai Based Solution
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="search_engine_optimization"
                      smooth={true}
                      duration={500}
                    >
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="web_design"
                      smooth={true}
                      duration={500}
                    >
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="podcast_radio"
                      smooth={true}
                      duration={500}
                    >
                      Podcast & Radio Ad
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="video_film_making"
                      smooth={true}
                      duration={500}
                    >
                      Video & Film Making/Editing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="lead_generation"
                      smooth={true}
                      duration={500}
                    >
                      Lead Generation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="copy_writing"
                      smooth={true}
                      duration={500}
                    >
                      CopyWriting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="influencer_marketing"
                      smooth={true}
                      duration={500}
                    >
                      Influencer Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="public_relations"
                      smooth={true}
                      duration={500}
                    >
                      Public Relations (PR)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="news_broadcast"
                      smooth={true}
                      duration={500}
                    >
                      News Broadcast
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="legal_solutions"
                      smooth={true}
                      duration={500}
                    >
                      Legal Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="financial_solutions"
                      smooth={true}
                      duration={500}
                    >
                      Financial Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link cursor-pointer"
                      to="business_consulting"
                      smooth={true}
                      duration={500}
                    >
                      Business Consulting
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link cursor-pointer fw-bold"
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
