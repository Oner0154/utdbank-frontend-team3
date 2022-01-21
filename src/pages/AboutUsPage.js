import React from "react";
import About from "../components/about/About";
import Retail from "../components/about/Retail";
import Footer from "../components/common/Footer";
import PageHeader from "../components/common/PageHeader";
import Topbar from "../components/common/Topbar";

const AboutUsPage = () => {
  return (
    <><Topbar/>
      <PageHeader image="about-page.png" title="About Us" />
      <About />
      <Retail />
      <Footer/>
    </>
  );
};

export default AboutUsPage;
