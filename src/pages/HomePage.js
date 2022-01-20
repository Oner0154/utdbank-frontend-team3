import React from "react";
import Footer from "../components/common/Footer";
import Topbar from "../components/common/Topbar";
import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";
import Counters from "../components/home/counter/Counters";
import HomeAbout from "../components/home/HomeAbout";
import Facility from "../components/home/Facility";
import Features from "../components/home/Features";
import HomeContact from "../components/home/HomeContact";
import HomePricing from "../components/home/HomePricing";
import Testimonals from "../components/home/testimonal/Testimonals";
import HomeService from "../components/home/HomeService";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Banner />
      <BannerContact />
      <Features />
      <HomeAbout />
      <Counters />
      <HomeService />
      <HomePricing />
      <Facility />
      <HomeContact />
      <Testimonals />
      <Footer />
    </>
  );
};

export default HomePage;
