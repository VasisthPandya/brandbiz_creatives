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
              <a
                className="navbar-brand d-flex align-items-center gap-3"
                href="#"
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
              </a>
            </li>
            <ul className="d-lg-flex gap-3 list-unstyled">
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  About Us
                </a>
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
                    <a className="dropdown-item" href="#">
                      Social Media Marketing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ai Based Solution
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Search Engine Optimization
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Podcast & Radio Ad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Video & Film Making/Editing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lead Generation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CopyWriting
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Influencer Marketing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Public Relations (PR)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      News Broadcast
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Legal Solutions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Financial Solutions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Business Consulting
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link fw-bold" href="#">
                  Contact Us
                </a> */}
                <Link
                  className="nav-link"
                  to="contact_us"
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
