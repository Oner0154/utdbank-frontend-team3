import React from "react";
import PageHeader from "../components/common/PageHeader";
import Pricing from "../components/pricing/Pricing";

const PricingPage = () => {
  return (
    <>
      <PageHeader title="Pricing" image="blog.png" />
      <Pricing />
    </>
  );
};

export default PricingPage;
