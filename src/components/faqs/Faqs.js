import React from "react";

const Faqs = () => {
  return (
    <section className="faq-section pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>What Want To Know?</h2>
        </div>
        <div className="faq-section-content">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-5 pb-30 order-2 order-lg-1">
              <div className="faq-accordion">
                <div className="faq-accordion-item faq-accordion-item-active">
                  <div className="faq-accordion-header">
                    <h3 className="faq-accordion-title">
                      How can I cancel/pause my subscription?
                    </h3>
                    <div className="faq-accordion-header-overlay"></div>
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniaquis nostrud
                        ullamco nisi ut aliquip
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-accordion-item">
                  <div className="faq-accordion-header">
                    <h3 className="faq-accordion-title">
                      Does the price go up as my team gets larger?
                    </h3>
                    <div className="faq-accordion-header-overlay"></div>
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniaquis nostrud
                        ullamco nisi ut aliquip
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-accordion-item">
                  <div className="faq-accordion-header">
                    <h3 className="faq-accordion-title">
                      What access do I have on a free trial?
                    </h3>
                    <div className="faq-accordion-header-overlay"></div>
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniaquis nostrud
                        ullamco nisi ut aliquip
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-accordion-item">
                  <div className="faq-accordion-header">
                    <h3 className="faq-accordion-title">
                      What access do I have on the free plan?
                    </h3>
                    <div className="faq-accordion-header-overlay"></div>
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniaquis nostrud
                        ullamco nisi ut aliquip
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1 pb-30 order-1 order-lg-2">
              <div className="home-image-content">
                <img src="assets/images/faq-img.png" alt="facility" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
