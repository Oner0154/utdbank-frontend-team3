import React from "react";
import SectionTitle from "../../common/SectionTitle";

const HomeAboutItem = ({
  title,
  description,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  image,
  type,
}) => {
  return (
    <div className="row align-items-center">
      {type === 2 ? (
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="home-about-item home-about-image pb-30 about-image-shape">
            <div className="home-image-content">
              <img
                src={`assets/images/${image}`}
                alt="about"
                className="scale-one-zero-one"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
        <div
          className={
            type === 1
              ? "home-about-item desk-pad-right-10 pb-30"
              : "home-about-item desk-pad-left-10 pb-30"
          }
        >
          <SectionTitle title={title} description={description} />

          <div className="home-about-list">
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              {title1}
            </div>
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              {title2}
            </div>
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              {title3}
            </div>
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              {title4}
            </div>
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              {title5}
            </div>
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              {title6}
            </div>
          </div>
          <div className="home-about-animation">
            <div className="home-animation-item">
              <img src="assets/images/curve-line.png" alt="animated-icon" />
            </div>
            <div className="home-animation-item">
              <img src="assets/images/triangle.png" alt="animated-icon" />
            </div>
          </div>
        </div>
      </div>
      {type === 1 ? (
        <div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
          <div className="home-about-item home-about-image pb-30 about-image-ellipsis">
            <div className="home-image-content">
              <img
                src={`assets/images/${image}`}
                alt="about"
                className="scale-one-zero-one"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeAboutItem;
