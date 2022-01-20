import React from "react";
import SectionTitle from "../common/SectionTitle";
import ServiceItem from "../services/ServiceItem";

const Services = () => {
  return (
    <section className="home-service-section p-tb-100">
      <div className="container">
        <SectionTitle
          title="Services we are providing"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit
            sed do eiusmod agnamqua ptatem consectetur."
        />
        <div className="home-service-content service-page-grid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                title="Drag and drop functionality"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
                image="service1.png"
              />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                title="Email notifications"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
        sed deimod empor inddunt ut ualor sit amet"
                image="service2.png"
              />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                title="Deadline reminders"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
                image="service3.png"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                title="Simple dashboard"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
                image="service4.png"
              />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                title="Incredible infrastructure"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
                image="service5.png"
              />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem
                title="Drag and drop functionality"
                description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
                image="service1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
