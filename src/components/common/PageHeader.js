import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, image }) => {
  return (
    <div
      className="page-title page-bg"
      style={{ backgroundImage: `url(assets/images/${image})` }}
    >
      <div className="container">
        <div className="page-title-inner">
          <div className="section-title">
            <h1>{title}</h1>
            <ul className="page-breadcrumbs">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
