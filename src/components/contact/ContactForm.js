import React from "react";

const ContactForm = () => {
  return (
    <section className="contact-comment-section bg-off-white pt-100 pb-70">
      <div className="container">
        <div className="home-facility-content">
          <div className="row align-items-end">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="home-facility-image">
                <div className="home-facility-item faq-block-image pb-30">
                  <img src="assets/images/contact-comment.png" alt="comment" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="home-facility-item pb-30">
                <div className="blog-comment-leave-area contact-comment-leave-area">
                  <h3 className="sub-section-title">Leave a message</h3>
                  <div className="blog-comment-input-area mt-40">
                    <form id="contactForm">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group mb-30">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-user"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                required=""
                                data-error="Please enter your name"
                                placeholder="Name*"
                              />
                            </div>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group mb-30">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-user"></i>
                                </span>
                              </div>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                required=""
                                data-error="Please enter your email"
                                placeholder="Email*"
                              />
                            </div>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group mb-30">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-phone-call"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                name="phone_number"
                                id="phone_number"
                                required=""
                                data-error="Please enter your phone number"
                                className="form-control"
                                placeholder="Phone*"
                              />
                            </div>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group mb-30">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-book"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                name="msg_subject"
                                id="msg_subject"
                                className="form-control"
                                required=""
                                data-error="Please enter your subject"
                                placeholder="Subject*"
                              />
                            </div>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <div className="form-group mb-30">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-email"></i>
                                </span>
                              </div>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                rows="5"
                                required=""
                                data-error="Write your message"
                                placeholder="Your Message*"
                              ></textarea>
                            </div>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <button
                            className="btn1 orange-gradient btn-with-image"
                            type="submit"
                          >
                            <i className="flaticon-login"></i>
                            <i className="flaticon-login"></i>
                            Send A Message
                          </button>
                          <div id="msgSubmit"></div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </form>
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

export default ContactForm;
