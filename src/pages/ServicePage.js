import React from "react";
import Footer from "../components/common/Footer";
import PageHeader from "../components/common/PageHeader";
import Topbar from "../components/common/Topbar";
import Service from "../components/services/Service";

const ServicePage = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="Services" image="terms.png" />
      <Service />
      <Footer />
    </>
  );
};

export default ServicePage;
