import React from "react"

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="container">
        <div className="footer-upper">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="footer-content-item">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="assets/images/logo-white.png" alt="logo" />
                  </a>
                </div>
                <div className="footer-details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiisicing elit, sed
                    do eiusmod tempor inc Neque porro quisquam est qui dolorem
                    aliquam quaerat luptatem. sed do eiusmod tempor inc
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="footer-content-list footer-content-item">
                <div className="footer-content-title">
                  <h3>Support</h3>
                </div>
                <ul className="footer-details footer-list">
                  <li>
                    <a href="faqs.html">FAQ's</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="terms-conditions.html">Terms & Conditions</a>
                  </li>

                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="footer-content-list footer-content-item">
                <div className="footer-content-title">
                  <h3>Company</h3>
                </div>
                <ul className="footer-details footer-list">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="features.html">Features</a>
                  </li>
                  <li>
                    <a href="pricing.html">Our Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="footer-content-list footer-content-item">
                <div className="footer-content-title">
                  <h3>Address</h3>
                </div>
                <ul className="footer-details footer-list">
                  <li>
                    Address:
                    <span>456 Labisto Parkways, CA, United States</span>
                  </li>
                  <li>
                    Message:
                    <span>
                      <a href="/cdn-cgi/l/email-protection#96fff8f0f9d6f7fafff7b8f5f9fb">
                        <span
                          className="__cf_email__"
                          data-cfemail="224b4c444d62434e4b430c414d4f"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </span>
                  </li>
                  <li>
                    Phone:
                    <span>
                      <a href="tel:(+00)67834598">(+00) 678 345 98</a>
                    </span>
                  </li>
                  <li>
                    Faq: <span>+(456) 332-897-234</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <div className="footer-lower-item footer-copyright-text">
            <p>
              Copyright ©2021 Design & Developed by
              <a href="https://techproeducation.com" target="_blank">
                Techpro Education
              </a>
            </p>
          </div>
          <div className="footer-lower-item footer-social-logo">
            <ul className="footer-social-list">
              <li className="social-btn social-btn-fb">
                <a href="#">
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li className="social-btn social-btn-tw">
                <a href="#">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li className="social-btn social-btn-ins">
                <a href="#">
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li className="social-btn social-btn-pin">
                <a href="#">
                  <i className="bx bxl-pinterest-alt"></i>
                </a>
              </li>
              <li className="social-btn social-btn-yt">
                <a href="#">
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
