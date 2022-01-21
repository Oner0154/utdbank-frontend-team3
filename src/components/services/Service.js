import React from "react";
import SectionTitle from "../common/SectionTitle";
import ServiceItem from "./ServiceItem";

const Service = () => {
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
            <ServiceItem
              image="service1.png"
              title="Drag and drop functionality"
              description="  Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
            />

            <ServiceItem
              image="service2.png"
              title="Email notifications"
              description="  Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
            />

            <ServiceItem
              image="service3.png"
              title="Deadline reminders"
              description="  Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
            />

            <ServiceItem
              image="service4.png"
              title="Simple dashboard"
              description="  Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
            />

            <ServiceItem
              image="service5.png"
              title="Incredible infrastructure"
              description="  Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
            />

            <ServiceItem
              image="service6.png"
              title="Drag and drop functionality"
              description="  Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                      sed deimod empor inddunt ut ualor sit amet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
