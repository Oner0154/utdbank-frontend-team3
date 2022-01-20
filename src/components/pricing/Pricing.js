import React from "react";
import PricingAdvanced from "./PricingAdvanced";
import PricingBasic from "./PricingBasic";
import PricingPremium from "./PricingPremium";

const Pricing = () => {
  return (
    <section className="pricing-section p-tb-100">
      <div className="container">
        <div className="pricing-box-grid">
          <PricingBasic />
          <PricingAdvanced />
          <PricingPremium />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
