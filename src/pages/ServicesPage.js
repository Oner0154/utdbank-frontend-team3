import React from "react";
import PageHeader from "../components/common/PageHeader";
import Services from "../components/services/Services";

const ServicesPage = () => {
  return (
    <>
      <PageHeader title="Services" image="terms.png" />
      <Services />
    </>
  );
};

export default ServicesPage;
