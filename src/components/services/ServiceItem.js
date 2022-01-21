import React from "react";

import { Link } from "react-router-dom";

const ServiceItem = (props) => {
  const { image, title, description, more } = props;

  return (
    
    <div className="home-service-item fluid-height">
      <div className="home-service-details full-height">
        <div className="home-service-image">
          <img src={`assets/images/${image}`} alt="service" />
        </div>
        <div className="home-service-text">
          <h3>{title}</h3>
          <p>{description}</p>
          {more && <Link to="/service-details">Read More +</Link>}
        </div>
      </div>
    </div>
   

  );
};

export default ServiceItem;
