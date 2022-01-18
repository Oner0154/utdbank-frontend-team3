import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="fixed-top">
      <div className="navbar-area">
        <div className="mobile-nav">
          <Link to="/" className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </Link>

          <div className="navbar-option">
            <div className="navbar-option-item">
              <Link to="/">
                <i className="flaticon-login"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="/">
                <img src="assets/images/logo.png" alt="logo" />
              </Link>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/services" className="nav-link">
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/pricing" className="nav-link">
                      Pricing
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="navbar-option">
                <div className="navbar-option-item">
                  <Link
                    to="/loginregister"
                    className="btn1 blue-gradient
          btn-with-image text-nowrap"
                  >
                    <i className="flaticon-login"></i>
                    <i className="flaticon-login"></i>
                    Sign Up / Login
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
