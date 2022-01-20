import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Topbar = () => {
  return (
    // <!-- TOP BAR START -->
    <div className="fixed-top">
      <div className="navbar-area">
        <div className="mobile-nav">
          <Link to="/" className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </Link>

          <div className="navbar-option">
            <div className="navbar-option-item">
              <Link to="/authentication">
                <i className="flaticon-login"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- MENU START--> */}
        <Menu />
        {/* <!-- MENU END--> */}
      </div>
    </div>
    // <!-- TOP BAR END -->
  );
};

export default Topbar;
