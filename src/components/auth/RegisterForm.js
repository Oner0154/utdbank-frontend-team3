import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Spinner } from "react-bootstrap";
import { register } from "../../api/user-service";
import { toast } from "react-toastify";
import MaskInput from "react-maskinput";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    ssn: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    mobilePhoneNumber: "",
  };
  const validationSchema = Yup.object({
    ssn: Yup.string()
      .required("Please enter a ssn.")
      .test(
        "includes_",
        "Please enter a valid ssn",
        (value) => value && !value.includes("_")
      ),
    firstName: Yup.string().required("Please enter your firstname"),
    lastName: Yup.string().required("Please enter your lastname"),
    email: Yup.string().required("Please enter your email"),
    password: Yup.string().required("Please enter a password"),
    confirmPassword: Yup.string()
      .required("Please enter your password again")
      .oneOf([Yup.ref("password")], "Password fields don`t match"),
    address: Yup.string().required("Please enter your adress"),
    mobilePhoneNumber: Yup.string()
      .required("This field is Required")
      .test(
        "includes_",
        "Please enter a valid phonenumber",
        (value) => value && !value.includes("_")
      ),
  });

  const onSubmit = (values) => {
    console.log(values);
    setLoading(true);

    register(values)
      .then((resp) => {
        setLoading(false);
        toast("You are registered successfully!");
        navigate("/authentication");
      })
      .catch((err) => {
        toast(err.response.data.message);
        setLoading(false);
      });
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className="authentication-form">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="SSN *"
                  {...formik.getFieldProps("ssn")}
                  isInvalid={!!formik.errors.ssn}
                  as={MaskInput}
                  maskChar="_"
                  mask="000-00-0000"
                  showMask
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.ssn}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  {...formik.getFieldProps("firstName")}
                  isInvalid={!!formik.errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.firstName}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="last name"
                  {...formik.getFieldProps("lastName")}
                  isInvalid={!!formik.errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.lastName}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>
                <Form.Control
                  type="email"
                  className="form-control"
                  placeholder="email"
                  {...formik.getFieldProps("email")}
                  isInvalid={!!formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>
                <Form.Control
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  isInvalid={!!formik.errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>
                <Form.Control
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  {...formik.getFieldProps("confirmPassword")}
                  isInvalid={!!formik.errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.confirmPassword}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group mb-15">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="address"
                  {...formik.getFieldProps("address")}
                  isInvalid={!!formik.errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.address}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group mb-10">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="phone number"
                  {...formik.getFieldProps("mobilePhoneNumber")}
                  isInvalid={!!formik.errors.mobilePhoneNumber}
                  as={MaskInput}
                  maskChar="_"
                  mask="(000) 000-0000"
                  alwaysShowMask
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.mobilePhoneNumber}
                </Form.Control.Feedback>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <button
              className="btn1 orange-gradient full-width"
              type="submit"
              disabled={loading}
            >
              {" "}
              {loading && <Spinner animation="border" variant="light" />}
              Sign Up
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default RegisterForm;
