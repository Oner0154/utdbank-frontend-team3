import React from "react";
import Menu from "./Menu";

const Topbar = () => {
  return (
    <div className="fixed-top">
      <div className="navbar-area">
        <div className="mobile-nav">
          <a href="index.html" className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <div className="navbar-option">
            <div className="navbar-option-item">
              <a href="authentication.html">
                <i className="flaticon-login"></i>
              </a>
            </div>
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default Topbar;
