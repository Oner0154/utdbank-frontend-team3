import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Spinner } from "react-bootstrap";
import { useStore } from "../../store/index";
import { login, getUser } from "../../api/user-service";
import { loginFailed, loginSuccess } from "../../store/user/userAction";
import { toast } from "react-toastify";
import MaskInput from "react-maskinput/lib";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { dispatchUser } = useStore();
  const navigate = useNavigate();

  const initialValues = {
    ssn: "",
    password: "",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string()
      .required("Please enter a ssn.")
      .test(
        "includes_",
        "Please enter a valid ssn",
        (value) => value && !value.includes("_")
      ),
    password: Yup.string().required("Please enter a password"),
  });

  const onSubmit = (values) => {
    console.log(values);
    setLoading(true);
    login(values)
      .then((respLogin) => {
        localStorage.setItem("token", respLogin.data.token);
        getUser()
          .then((respUser) => {
            console.log(respUser);
            dispatchUser(loginSuccess(respUser.data));
            navigate("/");
            setLoading(false);
          })
          .catch((err) => {
            toast(err.response.data.message);
            setLoading(false);
            dispatchUser(loginFailed());
          });
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
            <button
              className="btn1 orange-gradient full-width"
              type="submit"
              disabled={loading}
            >
              {loading && <Spinner animation="border" variant="light" />}
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
