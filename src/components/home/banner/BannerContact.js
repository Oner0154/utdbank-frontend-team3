import React from "react";
import BannerContactItem from "./BannerContactItem";

const BannerContact = () => {
  return (
    <div className="header-suuport">
      <div className="container">
        <div className="header-support-group">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg order-md-2 order-lg-4">
              <div className="support-bank">
                <div className="support-bank-info">
                  <ul className="review-star">
                    <li className="full-star">
                      <i className="bx bxs-star"></i>
                    </li>
                    <li className="full-star">
                      <i className="bx bxs-star"></i>
                    </li>
                    <li className="full-star">
                      <i className="bx bxs-star"></i>
                    </li>
                    <li className="full-star">
                      <i className="bx bxs-star"></i>
                    </li>
                    <li className="full-star">
                      <i className="bx bxs-star"></i>
                    </li>
                  </ul>
                  <p>
                    Migration dolor sit amet etur divelit conseetur diisci velit
                    sed tempora incidunt
                  </p>
                  <div className="support-logo">
                    <img src="assets/images/logo.png" alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg order-md-1 order-lg-1">
              <BannerContactItem
                image="envelop.png"
                title={<a href="mailto:info@udtbank.com">info@udtbank.com</a>}
                description="Support 24/7"
              />
            </div>
            <div className="col-sm-6 col-md-12 col-lg order-md-3 order-lg-2">
              <BannerContactItem
                image="phone.png"
                title={<a href="tel:(+00)67834598">(+00) 678 345 98</a>}
                description="Free Consultation"
              />
            </div>

            <div className="col-sm-6 col-md-12 col-lg order-md-4 order-lg-3">
              <BannerContactItem
                image="map.png"
                title="456 Labisto Parkways"
                description="CA, United States"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
