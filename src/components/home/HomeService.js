import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import ServiceItem from "../services/ServiceItem";

const HomeService = () => {
  return (
    // <!-- SERVICES START -->
    <section className="home-service-section pt-100 pb-70">
      <div className="container">
        <div className="home-service-content">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="home-service-item fluid-height">
                <div className="home-service-start full-height">
                  {/* <!-- SECTION TITLE START --> */}
                  <SectionTitle
                    title="Entirely providing best services"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  sed do eiusmod agnamqua ptatem consectetur."
                  />

                  {/* <!-- SECTION TITLE END --> */}

                  <Link
                    to="/service"
                    className="btn1 blue-gradient btn-with-image"
                  >
                    <i className="flaticon-login"></i>
                    <i className="flaticon-login"></i>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              {/* <!-- SERVICE ITEM START --> */}

              <ServiceItem
                image="service1.png"
                title="Drag and drop functionality"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
              sed deimod empor inddunt ut ualor sit amet"
                more={true}
              />

              {/* <!-- SERVICE ITEM END --> */}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              {/* <!-- SERVICE ITEM START --> */}

              <ServiceItem
                image="service2.png"
                title="Email notifications"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
              sed deimod empor inddunt ut ualor sit amet"
                more={true}
              />

              {/* <!-- SERVICE ITEM END --> */}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              {/*  <!-- SERVICE ITEM START --> */}

              <ServiceItem
                image="service3.png"
                title="Deadline reminders"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
              sed deimod empor inddunt ut ualor sit amet"
                more={true}
              />

              {/* <!-- SERVICE ITEM END --> */}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              {/* <!-- SERVICE ITEM START --> */}

              <ServiceItem
                image="service4.png"
                title="Simple dashboard"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
              sed deimod empor inddunt ut ualor sit amet"
                more={true}
              />

              {/* <!-- SERVICE ITEM END --> */}
            </div>
            <div className="col-sm-12 offset-md-3 col-md-6 offset-lg-0 col-lg-4">
              {/* <!-- SERVICE ITEM START --> */}

              <ServiceItem
                image="service5.png"
                title="Incredible infrastructure"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
              sed deimod empor inddunt ut ualor sit amet"
                more={true}
              />

              {/* <!-- SERVICE ITEM END --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- SERVICES END -->
  );
};

export default HomeService;
