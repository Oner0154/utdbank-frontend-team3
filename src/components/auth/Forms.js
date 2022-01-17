import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Forms = () => {
  return (
    <div className="authentication-section">
      <div className="authentication-grid">
        <div className="authentication-item authentication-img-bg"></div>
        <div className="authentication-item bg-white pl-15 pr-15">
          <div className="authentication-user-panel">
            <div className="authentication-user-header">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="logo" />
              </a>
              <h1>Welcome to UTD Bank</h1>
            </div>
            <div className="authentication-user-body">
              <div className="authentication-tab">
                <div
                  className="authentication-tab-item authentication-tab-active"
                  data-authentcation-tab="1"
                >
                  <img src="assets/images/login.png" alt="icon" />
                  Login
                </div>
                <div
                  className="authentication-tab-item authentication-tab-active"
                  data-authentcation-tab="2"
                >
                  <img src="assets/images/register.png" alt="icon" />
                  Register
                </div>
              </div>
              <div className="authentication-tab-details">
                <div
                  className="authentication-tab-details-item authentication-tab-details-active"
                  data-authentcation-details="1"
                >
                  <LoginForm />
                </div>
                <div
                  className="authentication-tab-details-item"
                  data-authentcation-details="2"
                >
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
