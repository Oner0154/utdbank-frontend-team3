import React from "react";
import SectionTitle from "../../common/SectionTitle";
import CounterItem from "./CounterItem";

const Counters = () => {
  return (

    <section className="counter-section pt-100 pb-70">
      <div className="container">
        <SectionTitle title="We always try to evaluate customers Values" />

        <div className="counter-content">
          <CounterItem counter="70" size="lg" sign="+" title="Contributors" />
          <CounterItem
            counter="40"
            size="sm"
            sign="K"
            title="Feedback"
            loader
          />
          <CounterItem
            counter="1000"
            size="sm"
            sign="k"
            title="Downloaded"
            loader
          />
          <CounterItem
            counter="590"
            size="lg"
            sign="+"
            title="Workers"
            loader
          />
        </div>
      </div>
    </section>

  );
};

export default Counters;
