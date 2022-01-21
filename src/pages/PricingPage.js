import React from "react";
import Pricing from "../components/pricing/Pricing";
import PageHeader from "../components/common/PageHeader";
import Topbar from "../components/common/Topbar";
import Footer from "../components/common/Footer";

const PricingPage = () => {
  return (
    <>
    <Topbar/>
      <PageHeader image="blog.png" title="Pricing" />
      <Pricing />
      <Footer/>
    </>
  );
};

export default PricingPage;
