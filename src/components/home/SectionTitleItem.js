import React from "react";

const SectionTitleItem = ({ image, title, description, color }) => {
  return (
    <div className="item">
      <div className="feature-carousel-content">
        <div className={`feature-carousel-thumb status-${color}`}>
          <img src={`assets/images/${image}`} alt="feature" />
        </div>
        <div className="feature-carousel-details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleItem;
