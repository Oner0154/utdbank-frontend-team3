import React from "react";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <>
      <header className="header header-bg">
        <div className="container-fluid">
          <div className="header-inner">
            <div className="header-content">
              <h1>Stay in control your finances with Aila</h1>
              <p>
                The advantage of online banking is that you can pay bills
                superfast, and your account is automatically credited or debited
                for each deposit and payment
              </p>
              <ul className="section-button">
                <li>
                  <Link
                    to="/authentication"
                    className="btn1 orange-gradient btn-with-image"
                  >
                    <i className="flaticon-login"></i>
                    <i className="flaticon-login"></i>
                    Get started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Banner;
