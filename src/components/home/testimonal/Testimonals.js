import React from "react";
import SectionTitle from "../../common/SectionTitle";
import Testimonal from "./Testimonal";

const Testimonals = () => {
  return (
    // <!-- TESTIMONALS START -->
    <section className="home-client-section pt-100 pb-50">
      <div className="container">
        {/* <!-- SECTION TITLE START --> */}
        <SectionTitle
          title="Clients Feedback"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore"
        />

        {/* <!-- SECTION TITLE END --> */}

        <div className="client-carousel-content">
          <div className="client-carousel owl-carousel owl-theme">
            {/* <!-- TESTIMONAL START --> */}

            <Testimonal
              image="carousel-1.png"
              coment="Awesome dolor sit amet, consectetur adipisicing elit sed
            do eusmod tempor incididunt ut labore et dolore magna
            aliquaenminim veniam quis nostrud dolore magn doloreut
            labore dolore magn."
              name="Devit M. kolin"
              jobTitle="CEO & Founder"
            />

            {/*  <!-- TESTIMONAL END --> */}

            {/* <!-- TESTIMONAL START --> */}

            <Testimonal
              image="carousel-2.png"
              coment="Very ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae.."
              name="Sienna Miller"
              jobTitle="CTO"
            />

            {/* <!-- TESTIMONAL END --> */}
          </div>
        </div>
      </div>
    </section>
    // <!-- TESTIMONALS END -->
  );
};

export default Testimonals;
