import React from "react";

const BannerContactItem = ({ image, title, description }) => {
  return (
    <div className="support-group-item">
      <div className="support-thumb">
        <img src={`assets/images/${image}`} alt="support" />
      </div>
      <div className="support-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BannerContactItem;
