import React from "react";
import Footer from "../components/common/Footer";
import PageHeader from "../components/common/PageHeader";
import Topbar from "../components/common/Topbar";
import Services from "../components/services/Services";

const ServicesPage = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="Services" image="terms.png" />
      <Services />
      <Footer />
    </>
  );
};

export default ServicesPage;
