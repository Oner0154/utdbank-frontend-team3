import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Forms = () => {
  const [active, setActive] = useState("login");
  const navigate = useNavigate();
  return (
    <div className="authentication-section">
      <div className="authentication-grid">
        <div className="authentication-item authentication-img-bg"></div>
        <div className="authentication-item bg-white pl-15 pr-15">
          <div className="authentication-user-panel" style={{ height: "auto" }}>
            <div className="authentication-user-header">
              <Link to="/">
                <img src="assets/images/logo.png" alt="logo" />
              </Link>
              <h1>Welcome to UTD Bank</h1>
            </div>
            <div className="authentication-user-body">
              <div className="authentication-tab">
                <div
                  className={`authentication-tab-item ${
                    active === "login" ? "authentication-tab-active" : ""
                  }`}
                  data-authentcation-tab="1"
                  onClick={() => {
                    setActive("login");
                  }}
                >
                  <img src="assets/images/login.png" alt="icon" />
                  Login
                </div>
                <div
                  className={`authentication-tab-item ${
                    active === "register" ? "authentication-tab-active" : ""
                  }`}
                  data-authentcation-tab="2"
                  onClick={() => {
                    setActive("register");
                  }}
                >
                  <img src="assets/images/register.png" alt="icon" />
                  Register
                </div>
              </div>

              <div className="authentication-tab-details">
                <div
                  className={`authentication-tab-details-item ${
                    active === "login"
                      ? "authentication-tab-details-active"
                      : ""
                  }`}
                  data-authentcation-details="1"
                  onClick={() => {
                    setActive("login");
                  }}
                >
                  <LoginForm />
                </div>
                <div
                  className={`authentication-tab-details-item ${
                    active === "register"
                      ? "authentication-tab-details-active"
                      : ""
                  }`}
                  data-authentcation-details="2"
                  onClick={() => setActive("register")}
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
