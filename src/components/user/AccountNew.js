import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import MaskInput from "react-maskinput";
import {
  Form,
  Button,
  Spinner,
  Row,
  Col,
  ButtonGroup,
  Card,
  FormCheck,
} from "react-bootstrap";
import { createAccount } from "../../api/accounts-service";
import { useNavigate } from "react-router-dom";

const AccountNew = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    description: "",
    balance: "",
    currencyCode: "",
    accountType: "",
    accountStatusType: "",
  };

  const validationSchema = Yup.object({
    description: Yup.string().required("Please enter a account description"),
    balance: Yup.string().required(""),
    currencyCode: Yup.string().required("Please enter currency code"),
    accountType: Yup.string().required("Please enter account type"),
    accountStatusType: Yup.string().required(""),
  });

  const onSubmit = (values) => {
    setLoading(true);

    createAccount(values)
      .then((resp) => {
        setLoading(false);
        toast("Account has been created successfully");
        navigate("/account");
      })
      .catch((err) => {
        toast("An error occured");
        console.log(err.response.data.message);
        setLoading(false);
      });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Card>
        <Card.Body>
          <Row>
            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="p-2"
                style={{ border: "0.25px solid" }}
                type="text"
                placeholder="Enter from account description"
                {...formik.getFieldProps("description")}
                isInvalid={!!formik.errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                className="p-2"
                style={{ border: "0.25px solid" }}
                type="text"
                {...formik.getFieldProps("balance")}
                isInvalid={!!formik.errors.balance}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.balance}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Currency Code</Form.Label>
              <Form.Select
                className="p-2"
                style={{ border: "0.25px solid" }}
                type="text"
                {...formik.getFieldProps("currencyCode")}
                isInvalid={!!formik.errors.currencyCode}
              >
                <option>Please select a currency code</option>
                <option>EUR</option>
                <option>USD</option>
                <option>TRY</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.currencyCode}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Account Type</Form.Label>
              <Form.Select
                className="p-2"
                style={{ border: "0.25px solid" }}
                type="text"
                {...formik.getFieldProps("accountType")}
                isInvalid={!!formik.errors.accountType}
              >
                <option>Please enter a account type</option>
                <option>SAVING</option>
                <option>INVESTING</option>
                <option>CREDIT-CARD</option>
                <option>CHECKING</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.accountType}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Account Status Type</Form.Label>
              <Form.Select
                className="p-2"
                style={{ border: "0.25px solid" }}
                type="text"
                {...formik.getFieldProps("accountStatusType")}
                isInvalid={!!formik.errors.accountStatusType}
              >
                <option>Please enter account status type</option>
                <option value="1">SUSPENDED</option>
                <option value="2">CLOSED</option>
                <option value="3">ACTIVE</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.accountStatusType}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="text-end">
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" type="submit" disabled={loading}>
                Create
              </Button>
              <Button
                variant="secondary"
                type="button"
                variant="secondary"
                onClick={() => navigate("/account")}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default AccountNew;
