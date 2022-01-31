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
import PrivateRoute from "./PrivateRoute"
import ProfilePage from "../pages/user/ProfilePage"
import TransfersPage from "../pages/user/TransfersPage"
import TransfersNewPage from "../pages/user/TransfersNewPage"
import AccountsPage from "../pages/user/AccountsPage"
import AccountsPageEmployee from "../pages/employee/accounts/AccountsPage"
import AccountsPageManager from "../pages/manager/accounts/AccountsPage"
import AccountsNewPage from "../pages/user/AccountsNewPage"
import TransferDetailsPage from "../pages/user/TransferDetailsPage"
import AccountEditPage from "../pages/user/AccountEditPage"
import AccountsEditPageEmployee from "../pages/employee/accounts/AccountsEditPage"
import AccountsEditPageManager from "../pages/manager/accounts/AccountsEditPage"
import AccountsByUserIdPage from "../pages/employee/accounts/AccountByUserIdPage"
import AccountsByUserIdPageManager from "../pages/manager/accounts/AccountByUserIdPage"
import AccountCreateByUserIdPage from "../pages/employee/accounts/AccountCreateByUserIdPage"
import AccountCreateByUserIdPageManager from "../pages/manager/accounts/AccountCreateByUserIdPage"
import ErrorPage from "../pages/ErrorPage"
import TransferDetailsPageEmployee from "../pages/employee/transfers/TransferDetailsPageEmployee"
import AllTransfersPageEmployee from "../pages/employee/transfers/AllTransfersPageEmployee"
import TransfersByUserIdPageEmployee from "../pages/employee/transfers/TransfersByUserIdPageEmployee"
import TransfersByAccountNoPageEmployee from "../pages/employee/transfers/TransfersByAccountNoPageEmployee"
import AllTransfersPageManager from "../pages/manager/transfers/AllTransfersPageManager"
import TransferDetailsPageManager from "../pages/manager/transfers/TransferDetailsPageManager"
import TransfersByAccountNoPageManager from "../pages/manager/transfers/TransfersByAccountNoPageManager"
import TransfersByUserIdPageManager from "../pages/manager/transfers/TransfersByUserIdPageManager"
import UserEditPageManager from "../pages/manager/users/UserEditPageManager"
import UsersPageManager from "../pages/manager/users/UsersPageManager"
import UserEditPage from "../pages/employee/users/UserEditPage"
import UsersPage from "../pages/employee/users/UsersPage"

const CustomRoutes = () => {
  return (
    <Routes>
      {/* MANAGER ROUTES */}

      <Route
        path="/manager/user/:userId"
        element={
          <PrivateRoute admin={true}>
            <UserEditPageManager />
          </PrivateRoute>
        }
      />

      <Route
        path="/manager/users"
        element={
          <PrivateRoute admin={true}>
            <UsersPageManager />
          </PrivateRoute>
        }
      />

      <Route
        path="/transfer/:id/manager"
        element={
          <PrivateRoute manager={true}>
            <TransferDetailsPageManager />
          </PrivateRoute>
        }
      />
      <Route
        path="/transfer/:accountNo/accountNo/manager"
        element={
          <PrivateRoute manager={true}>
            <TransfersByAccountNoPageManager />
          </PrivateRoute>
        }
      />
      <Route
        path="/transfer/user/:userId/manager"
        element={
          <PrivateRoute manager={true}>
            <TransfersByUserIdPageManager />
          </PrivateRoute>
        }
      />
      <Route
        path="/transfer/manager/all"
        element={
          <PrivateRoute manager={true}>
            <AllTransfersPageManager />
          </PrivateRoute>
        }
      />
      <Route
        path="account/user/:userId/manager"
        element={
          <PrivateRoute employee={true}>
            <AccountsByUserIdPageManager />
          </PrivateRoute>
        }
      />
      <Route
        path="account/:userId/create/manager"
        element={
          <PrivateRoute manager={true}>
            <AccountCreateByUserIdPageManager />
          </PrivateRoute>
        }
      />
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

      {/* EMPLOYEE ROUTES */}

      <Route
        path="/employee/user/:userId"
        element={
          <PrivateRoute admin={true}>
            <UserEditPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/employee/users"
        element={
          <PrivateRoute admin={true}>
            <UsersPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/transfer/:id/employee"
        element={
          <PrivateRoute employee={true}>
            <TransferDetailsPageEmployee />
          </PrivateRoute>
        }
      />
      <Route
        path="/transfer/:accountNo/accountNo/employee"
        element={
          <PrivateRoute employee={true}>
            <TransfersByAccountNoPageEmployee />
          </PrivateRoute>
        }
      />
      <Route
        path="/transfer/user/:userId/employee"
        element={
          <PrivateRoute employee={true}>
            <TransfersByUserIdPageEmployee />
          </PrivateRoute>
        }
      />
      <Route
        path="/transfer/employee/all"
        element={
          <PrivateRoute employee={true}>
            <AllTransfersPageEmployee />
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
      <Route
        path="account/user/:userId/employee"
        element={
          <PrivateRoute employee={true}>
            <AccountsByUserIdPage />
          </PrivateRoute>
        }
      />
      <Route
        path="account/:userId/create/employee"
        element={
          <PrivateRoute employee={true}>
            <AccountCreateByUserIdPage />
          </PrivateRoute>
        }
      />

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

      {/* VISITOR ROUTES */}

      <Route path="/pagenotfound" element={<ErrorPage />} />
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
  )
}

export default CustomRoutes
