import React from "react";
import About from "../components/about/About";
import Retail from "../components/about/Retail";
import PageHeader from "../components/common/PageHeader";
import Topbar from "../components/common/Topbar";
import Footer from "../components/common/Footer";

const AboutPage = () => {
  return (
    <>
    <Topbar/>
      <PageHeader title="About Us" image="about-page.png" />
      <About />
      <Retail />
    <Footer/>  
    </>
  );
};

export default AboutPage;
