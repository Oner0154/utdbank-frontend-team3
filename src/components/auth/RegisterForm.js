import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
const RegisterForm = () => {
  const initialValues = {
    ssn: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    ssn: Yup.string().required("Please enter a ssn.").min(10),
    password: Yup.string().required("Please enter a password"),
    confirmPassword: Yup.string()
      .required("Please enter your password again")
      .oneOf([Yup.ref("password")], "Password fields don`t match"),
  });
  const onSubmit = (values) => {
    console.log(values);
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
            <button className="btn1 orange-gradient full-width" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default RegisterForm;
