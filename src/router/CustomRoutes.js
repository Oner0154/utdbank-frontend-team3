import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import AuthenticationPage from "../pages/Authentication";
import FaqsPage from "../pages/FaqsPage";
import ServicePage from "../pages/ServicePage";
import PricingPage from "../pages/PricingPage";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import TermsPage from "../pages/TermsPage";

const CustomRoutes = () => {
  return (
    <Routes>

      <Route path="/authentication" element={<AuthenticationPage />} />
      
      <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
     

      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/faqs" element={<FaqsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUsPage />} />
         <Route path="/" element={<HomePage />} />

     
    </Routes>
  );
};





export default CustomRoutes;


