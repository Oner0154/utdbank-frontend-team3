import React from "react";

const TestimonalItem = ({ image, description, title, person }) => {
  return (
    <div className="item">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className="client-carousel-thumb">
            <div className="client-carousel-icon">
              <div className="carousel-icon-item">
                <img src="assets/images/carousel-sqare.png" alt="icon" />
              </div>
              <div className="carousel-icon-item">
                <img src="assets/images/carousel-curve.png" alt="icon" />
              </div>
              <div className="carousel-icon-item">
                <img src="assets/images/carousel-round.png" alt="icon" />
              </div>
            </div>
            <div className="client-carousel-img">
              <img src={`assets/images/${image}`} alt="client" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-7">
          <div className="client-carousel-caption">
            <p className="client-caption-para">{description}</p>
            <h3 className="client-caption-title">{person}</h3>
            <h4 className="client-caption-designation">{title}</h4>
          </div>
          <div className="client-carousel-control">
            <button className="carousel-control-item carousel-control-item-left">
              <span>
                <i className="flaticon-right-arrow"></i>
              </span>
            </button>
            <button className="carousel-control-item carousel-control-item-right">
              <span>
                <i className="flaticon-left-arrow"></i>
              </span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalItem;



