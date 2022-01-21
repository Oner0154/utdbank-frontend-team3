import React from "react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    // <!-- USER MENU START -->
    <div className="navbar-option">
      <div className="navbar-option-item">
        <Link
          to="/authentication"
          className="btn1 blue-gradient btn-with-image text-nowrap"
        >
          <i className="flaticon-login"></i>
          <i className="flaticon-login"></i>
          Sign Up / Login
        </Link>
      </div>
    </div>
    // <!-- USER MENU END -->
  );
};

export default UserMenu;
