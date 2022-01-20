import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact-address-section pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="box-card fluid-height">
              <div className="box-card-inner full-height">
                <div className="box-card-icon mb-25">
                  <img src="assets/images/address.png" alt="icon" />
                </div>
                <div className="box-card-details">
                  <h3 className="box-card-title mb-20">Address</h3>
                  <p className="box-card-para">
                    456 Labisto Parkways, CA, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="box-card fluid-height">
              <div className="box-card-inner full-height">
                <div className="box-card-icon mb-25">
                  <img src="assets/images/email.png" alt="icon" />
                </div>
                <div className="box-card-details">
                  <h3 className="box-card-title mb-20">Email</h3>
                  <p className="box-card-para">
                    <Link
                      to="/cdn-cgi/l/email-protection#7e171018113e1f12171f501d1113"
                      className="link-us"
                    >
                      <span
                        className="__cf_email__"
                        data-cfemail="4b22252d240b2a27222a65282426"
                      >
                        [email&#160;protected]
                      </span>
                    </Link>
                  </p>
                  <p className="box-card-para">
                    <Link
                      to="/cdn-cgi/l/email-protection#82f1f7f2f2edf0f6c2e3eeebe3ace1edef"
                      className="link-us"
                    >
                      <span
                        className="__cf_email__"
                        data-cfemail="72010702021d000632131e1b135c111d1f"
                      >
                        [email&#160;protected]
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0">
            <div className="box-card fluid-height">
              <div className="box-card-inner full-height">
                <div className="box-card-icon mb-25">
                  <img src="assets/images/contact-phone.png" alt="icon" />
                </div>
                <div className="box-card-details">
                  <h3 className="box-card-title mb-20">Phone</h3>
                  <p className="box-card-para">
                    <Link to="tel:(+00)67834598" className="link-us">
                      (+00) 678 345 98
                    </Link>
                  </p>
                  <p className="box-card-para">+(456) 332-897-234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
