import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MaskInput from "react-maskinput/lib";
import { Form, FormControl } from "react-bootstrap";

const ContactForm = ({ formTitle, buttonTitle }) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
    msg_subject: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    phone_number: Yup.string()
      .required("Please enter your phone number")
      .test(
        "includes_",
        "Please enter a valid phone number.",
        (value) => value && !value.includes("_")
      ),
    msg_subject: Yup.string().required("Please enter your subject"),
    message: Yup.string().required("Write your message here"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
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
                  <h3 className="sub-section-title">{formTitle}</h3>
                  <div className="blog-comment-input-area mt-40">
                    <Form
                      id="contactForm"
                      noValidate
                      onSubmit={formik.handleSubmit}
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group mb-30">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-user"></i>
                                </span>
                              </div>

                              <FormControl
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                required=""
                                data-error="Please enter your name"
                                placeholder="Name*"
                                {...formik.getFieldProps("name")}
                                isInvalid={!!formik.errors.name}
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
                              <FormControl
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                required=""
                                data-error="Please enter your email"
                                placeholder="Email*"
                                {...formik.getFieldProps("email")}
                                isInvalid={!!formik.errors.email}
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
                              <FormControl
                                type="text"
                                name="phone_number"
                                id="phone_number"
                                required=""
                                data-error="Please enter your phone number"
                                className="form-control"
                                placeholder="Phone*"
                                {...formik.getFieldProps("phone_number")}
                                isInvalid={!!formik.errors.phone_number}
                                as={MaskInput}
                                maskChar="_"
                                mask="(000) 000-0000"
                                showMask
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
                              <FormControl
                                type="text"
                                name="msg_subject"
                                id="msg_subject"
                                className="form-control"
                                required=""
                                data-error="Please enter your subject"
                                placeholder="Subject*"
                                {...formik.getFieldProps("msg_subject")}
                                isInvalid={!!formik.errors.msg_subject}
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
                              <FormControl
                                as="textarea"
                                name="message"
                                className="form-control"
                                id="message"
                                rows="5"
                                required=""
                                data-error="Write your message here"
                                placeholder="Your Message*"
                                {...formik.getFieldProps("message")}
                                isInvalid={!!formik.errors.message}
                              />
                            </div>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <button
                            className="btn1 orange-gradient btn-with-image"
                            type="submit"
                            disabled={loading}
                          >
                            <i className="flaticon-login"></i>
                            <i className="flaticon-login"></i>
                            {loading && (
                              <div className="spinner-border spinner-border-sm"></div>
                            )}
                            {buttonTitle}
                          </button>
                          <div id="msgSubmit"></div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </Form>
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
