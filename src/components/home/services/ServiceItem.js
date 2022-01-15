import React from "react";

const ServiceItem = ({ title, description, image, link }) => {
  return (
    <div className="home-service-item fluid-height">
      <div className="home-service-details full-height">
        <div className="home-service-image">
          <img src={`assets/images/${image}`} alt="service" />
        </div>
        <div className="home-service-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank">
            Read More +
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
