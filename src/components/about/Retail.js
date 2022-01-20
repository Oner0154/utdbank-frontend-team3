import React from "react";
import { Link } from "react-router-dom";

const Retail = () => {
  return (
    <section className="retail-section-bg worker-section">
      <div className="container">
        <div className="home-about-content">
          <div className="worker-section-shape">
            <div className="worker-shape-item">
              <img src="assets/images/worker-vector.png" alt="icon" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-5 pb-30">
              <div className="home-service-start">
                <h2>Dedicated Team Support Helping You</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusul dolor sit amet, consecteturadipisci sed quia non
                  numquam eius modi tempora m dolor sit amet consectetu
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 worker-grid-item fluid-height">
                  <div className="worker-grid-content overflow-hidden border-radius-5">
                    <div className="worker-content-img">
                      <img src="assets/images/worker-3.png" alt="worker" />
                    </div>
                    <div className="worker-content-layout">
                      <h3 className="client-caption-title">John doe</h3>
                      <h4 className="client-caption-designation">CTO</h4>
                      <ul className="worker-social-link">
                        <li>
                          <Link to="facebook.com/johndoe" target="_blank">
                            <i className="bx bxl-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="twitter.com/johndoe" target="_blank">
                            <i className="bx bxl-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="instagram.com/johndoe" target="_blank">
                            <i className="bx bxl-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="linkedin.com/johndoe" target="_blank">
                            <i className="bx bxl-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 worker-grid-item fluid-height">
                  <div className="worker-grid-content overflow-hidden border-radius-5">
                    <div className="worker-content-img">
                      <img src="assets/images/worker-4.png" alt="worker" />
                    </div>
                    <div className="worker-content-layout">
                      <h3 className="client-caption-title">Alex maxwell</h3>
                      <h4 className="client-caption-designation">
                        CEO & Founder
                      </h4>
                      <ul className="worker-social-link">
                        <li>
                          <Link to="facebook.com/alexmaxwell" target="_blank">
                            <i className="bx bxl-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="twitter.com/alexmaxwell" target="_blank">
                            <i className="bx bxl-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="instagram.com/alexmaxwell" target="_blank">
                            <i className="bx bxl-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="linkedin.com/alexmaxwell" target="_blank">
                            <i className="bx bxl-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 worker-grid-item fluid-height">
                  <div className="worker-grid-content overflow-hidden border-radius-5">
                    <div className="worker-content-img">
                      <img src="assets/images/worker-1.png" alt="worker" />
                    </div>
                    <div className="worker-content-layout">
                      <h3 className="client-caption-title">Robert johnson</h3>
                      <h4 className="client-caption-designation">
                        Software Engineer
                      </h4>
                      <ul className="worker-social-link">
                        <li>
                          <Link to="facebook.com/robertjohnson" target="_blank">
                            <i className="bx bxl-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="twitter.com/robertjohnson" target="_blank">
                            <i className="bx bxl-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="instagram.com/robertjohnson"
                            target="_blank"
                          >
                            <i className="bx bxl-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="linkedin.com/robertjohnson" target="_blank">
                            <i className="bx bxl-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 worker-grid-item fluid-height">
                  <div className="worker-grid-content overflow-hidden border-radius-5">
                    <div className="worker-content-img">
                      <img src="assets/images/worker-2.png" alt="worker" />
                    </div>
                    <div className="worker-content-layout">
                      <h3 className="client-caption-title">Devit m. kolin</h3>
                      <h4 className="client-caption-designation">
                        Analysis Engineer
                      </h4>
                      <ul className="worker-social-link">
                        <li>
                          <Link to="facebook.com/devitmkolin" target="_blank">
                            <i className="bx bxl-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="twitter.com/devitmkolin" target="_blank">
                            <i className="bx bxl-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="instagram.com/devitmkolin" target="_blank">
                            <i className="bx bxl-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="linkedin.com/devitmkolin" target="_blank">
                            <i className="bx bxl-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retail;
