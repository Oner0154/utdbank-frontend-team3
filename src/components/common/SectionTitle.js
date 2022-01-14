import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
