import React from "react";
import { Link } from "react-router-dom";

const PricingBasic = () => {
  return (
    <div className="pricing-grid-item">
      <div className="pricing-grid-item-inner">
        <div className="pricing-item-header">
          <h3>
            <img src="assets/images/pricing-check.png" alt="icon" /> Basic
          </h3>
        </div>
        <div className="pricing-item-amount">
          <h4>
            <small>$</small>0.00/<span>Month</span>
          </h4>
        </div>
        <div className="pricing-item-body">
          <ul className="pricing-item-list">
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Google Analytics
              <span className="pricing-list-info">
                <i className="bx bxs-info-circle"></i>
              </span>
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Drag & Drop Widgets
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Mobile + Desktop Apps
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Messenger Integration
              <span className="pricing-list-info">
                <i className="bx bxs-info-circle"></i>
              </span>
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              100 ChatBot Triggers
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Visitor Info
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Quick Responses
              <span className="pricing-list-info">
                <i className="bx bxs-info-circle"></i>
              </span>
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              24/7 Live Chat
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Email Integration
            </li>
          </ul>
          <button
            as={Link}
            to="/authentication"
            className="btn1 orange-gradient btn-with-image"
          >
            <i className="flaticon-login"></i>
            <i className="flaticon-login"></i>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBasic;
