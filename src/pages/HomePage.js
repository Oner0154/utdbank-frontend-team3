import React from "react";
import Topbar from "../components/common/Topbar";
import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";
import Counter from "../components/home/Counter";
import Features from "../components/home/Features";
import HomeAbout from "../components/home/HomeAbout";
import Pricing from "../components/home/Pricing";
import Services from "../components/home/services/Services";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Banner />
      <BannerContact />
      <Features />
      <HomeAbout />
      <Counter />
      <Services />
      <Pricing />
    </>
  );
};

export default HomePage;
