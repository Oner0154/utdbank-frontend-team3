import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";

const LoginForm = () => {
  const initialValues = {
    ssn: "",
    password: "",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string().required("Please enter a ssn.").min(10),
    password: Yup.string().required("Please enter a password"),
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
            <button className="btn1 orange-gradient full-width" type="submit">
              Login
            </button>
          </div>
        </div>
        <div className="authentication-account-access mt-20">
          <div className="authentication-account-access-item">
            <div className="authentication-link">
              <Link to="/forgetpassword">Forget Password</Link>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
