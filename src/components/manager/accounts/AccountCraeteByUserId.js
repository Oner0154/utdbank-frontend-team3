import React, { useState } from "react"
import * as Yup from "yup"
import { toast } from "react-toastify"
import { useFormik } from "formik"
import {
  Form,
  Button,
  Spinner,
  Row,
  Col,
  ButtonGroup,
  Card,
  FormCheck,
} from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { createAccountByUserId } from "../../../api/admin-service"
const AccountCreateByUserId = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { userId } = useParams()
  const initialValues = {
    description: "",
    balance: 0,
    currencyCode: "",
    accountType: "",
  }
  const validationSchema = Yup.object({
    description: Yup.string().required("Please enter a account description"),
    balance: Yup.number().required(""),
    currencyCode: Yup.string().required("Please enter currency code"),
    accountType: Yup.string().required("Please enter account type"),
  })
  const onSubmit = (values) => {
    console.log(values)
    setLoading(true)

    createAccountByUserId(userId, values)
      .then((resp) => {
        setLoading(false)
        console.log(values)
        toast("Account has been created successfully")
        navigate(`/account/user/${userId}/manager`)
      })
      .catch((err) => {
        toast(err.response.data.message)
        setLoading(false)
      })
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  })
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
                <option>CREDIT_CARD</option>
                <option>CHECKING</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.accountType}
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
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>
    </Form>
  )
}
export default AccountCreateByUserId
