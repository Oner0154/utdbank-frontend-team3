import React from "react";
import { Link } from "react-router-dom";

const ErrorNotFound = () => {
  return (
    <div className="error-page-section">
      <div className="container">
        <div className="error-page-inner">
          <h1>404</h1>
          <h3>Oops! Page Not Found</h3>
          <p>The page you were looking for could not be found.</p>
          <Link to="/" className="btn1 btn-with-image orange-gradient">
            <i className="flaticon-login"></i>
            <i className="flaticon-login"></i>
            Return To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorNotFound;
