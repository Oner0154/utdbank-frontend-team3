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
import PrivateRoute from "./PrivateRoutes";
import ProfilePage from "../pages/user/ProfilePage";
import TransfersPage from "../pages/user/TransfersPage";
import TransfersNewPage from "../pages/user/TransfersNewPage";
import AccountsPage from "../pages/user/AccountsPage";
import AccountsNewPage from "../pages/user/AccountsNewPage";
import AccountDetailsPage from "../pages/user/AccountDetailsPage";
import TransferDetailsPage from "../pages/user/TransferDetailsPage";

const CustomRoutes = () => {
  return (
    <Routes>
      {/* VISITOR ROUTES */}
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
      <Route path="/login" element={<HomePage />} />

      {/* CUSTOMER ROUTES */}
      <Route
        path="/transfer"
        element={
          <PrivateRoute>
            <TransfersPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/transfer/create"
        element={
          <PrivateRoute>
            <TransfersNewPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/account"
        element={
          <PrivateRoute>
            <AccountsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/account/create"
        element={
          <PrivateRoute>
            <AccountsNewPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/account/:accountId"
        element={
          <PrivateRoute>
            <AccountDetailsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/transfer/:transferId"
        element={
          <PrivateRoute>
            <TransferDetailsPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default CustomRoutes;
