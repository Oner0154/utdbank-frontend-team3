import React from "react";
import SectionTitle from "../../common/SectionTitle";
import TestimonalItem from "./TestimonalItem";

const Testimonal = () => {
  return (
    <section className="home-client-section pt-100 pb-50">
      <div className="container">
        <SectionTitle
          title="Clients Feedback"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore"
        />

        <div className="client-carousel-content">
          <div className="client-carousel owl-carousel owl-theme">
            <TestimonalItem
              image="carousel-1.png"
              title="CEO & Founder"
              person="Devit M. kolin"
              description="Awesome dolor sit amet, consectetur adipisicing elit sed
              do eusmod tempor incididunt ut labore et dolore magna
              aliquaenminim veniam quis nostrud dolore magn doloreut
              labore dolore magn."
            />
            <TestimonalItem
              image="carousel-2.png"
              title="CTO"
              person="Sienna Miller"
              description="Very ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;

