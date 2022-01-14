import React from "react";
import UserMenu from "./UserMenu";

const Menu = () => {
  return (
    <div className="main-nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="index.html">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="about-us.html" className="nav-link">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a href="services.html" className="nav-link">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a href="pricing.html" className="nav-link">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a href="contact-us.html" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <UserMenu />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
