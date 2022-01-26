import React from "react"
import { Route, Routes } from "react-router-dom"
import ForgetPasswordPage from "../pages/ForgetPasswordPage"
import AuthenticationPage from "../pages/AuthenticationPage"
import FaqsPage from "../pages/FaqsPage"
import ServicePage from "../pages/ServicePage"
import PricingPage from "../pages/PricingPage"
import HomePage from "../pages/HomePage"
import AboutUsPage from "../pages/AboutUsPage"
import ContactPage from "../pages/ContactPage"
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage"
import TermsPage from "../pages/TermsPage"
import PrivateRoute from "./PrivateRoutes"
import ProfilePage from "../pages/user/ProfilePage"
import TransfersPage from "../pages/user/TransfersPage"
import TransfersNewPage from "../pages/user/TransfersNewPage"
import AccountsPage from "../pages/user/AccountsPage"
import AccountsPageEmployee from "../pages/employee/AccountsPage"
import AccountsPageManager from "../pages/manager/AccountsPage"
import AccountsNewPage from "../pages/user/AccountsNewPage"
import TransferDetailsPage from "../pages/user/TransferDetailsPage"
import AccountEditPage from "../pages/user/AccountEditPage"
import AccountsEditPageEmployee from "../pages/employee/AccountsEditPage"
import AccountsEditPageManager from "../pages/manager/AccountsEditPage"

const CustomRoutes = () => {
  return (
    <Routes>
      <Route
        path="/account/:accountNo/manager"
        element={
          <PrivateRoute manager={true}>
            <AccountsEditPageManager />
          </PrivateRoute>
        }
      />
      <Route
        path="/manager/accounts"
        element={
          <PrivateRoute manager={true}>
            <AccountsPageManager />
          </PrivateRoute>
        }
      />
      <Route
        path="/account/:accountNo/employee"
        element={
          <PrivateRoute employee={true}>
            <AccountsEditPageEmployee />
          </PrivateRoute>
        }
      />
      <Route
        path="/employee/accounts"
        element={
          <PrivateRoute employee={true}>
            <AccountsPageEmployee />
          </PrivateRoute>
        }
      />
      <Route path="/authentication" element={<AuthenticationPage />} />
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
        path="/account/:accountNo/user"
        element={
          <PrivateRoute>
            <AccountEditPage />
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
  )
}

export default CustomRoutes
