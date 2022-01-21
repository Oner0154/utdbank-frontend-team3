import React from "react";
import PrivacyPolicy from "../components/privacy-policy/PrivacyPolicy";
import PageHeader from "../components/common/PageHeader";
import Topbar from "../components/common/Topbar";
import Footer from "../components/common/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Topbar />
      <PageHeader image="terms.png" title="Privacy Policy" />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
