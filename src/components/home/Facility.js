import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";

const Facility = () => {
  return (
    // <!-- FACILITY START -->
    <section className="home-facility-section">
      <div className="home-facility-animation">
        <div className="home-animation-item">
          <img src="assets/images/curve-line.png" alt="animated-icon" />
        </div>
        <div className="home-animation-item">
          <img src="assets/images/triangle-light.png" alt="animated-icon" />
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="home-facility-content">
          <div className="row align-items-center m-0">
            <div className="col-sm-12 col-md-12 col-lg-6 p-0">
              <div className="home-facility-overview desk-ml-auto pr-20 pl-20">
                <div className="home-facility-item pb-30">
                  <div className="home-facility-details">
                    <div className="home-service-start">
                      {/* <!-- SECTION TITLE START --> */}
                      <SectionTitle
                        title="Payment gateway is easy to fill with our system"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod cste et dolore magnam aliquam
                      quaerat voluptatem."
                      />

                      {/* <!-- SECTION TITLE END --> */}

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim numquam eius modi
                        tempora incidunt ut labore et dolore magnam
                      </p>
                      <Link
                        to="/"
                        className="btn1 blue-gradient btn-with-image"
                      >
                        <i className="flaticon-login"></i>
                        <i className="flaticon-login"></i>
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-0">
              <div className="home-facility-image desk-pad-left-20">
                <div className="home-facility-item pb-30 img-right-res">
                  <img
                    src="assets/images/home-facility-bg.png"
                    alt="facility"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- FACILITY END -->
  );
};

export default Facility;
