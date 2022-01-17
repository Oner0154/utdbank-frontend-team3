import React from "react";
import Footer from "../components/common/Footer";
import Topbar from "../components/common/Topbar";
import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";
import Counter from "../components/home/Counter";
import Facility from "../components/home/Facility";
import Features from "../components/home/Features";
import HomeAbout from "../components/home/HomeAbout";
import HomeContact from "../components/home/HomeContact";
import Pricing from "../components/home/Pricing";
import Testimonal from "../components/home/testimonal/Testimonal";
import HomeServices from "../components/home/services/HomeServices";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Banner />
      <BannerContact />
      <Features />
      <HomeAbout />
      <Counter />
      <HomeServices />
      <Pricing />
      <Facility />
      <HomeContact />
      <Testimonal />
      <Footer />
    </>
  );
};

export default HomePage;
