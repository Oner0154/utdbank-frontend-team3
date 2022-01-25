import React, { useState } from "react"
import * as Yup from "yup"
import { toast } from "react-toastify"
import { useFormik } from "formik"
import { Form, Button, Row, Col, ButtonGroup, Card } from "react-bootstrap"
import { createTransfer } from "../../api/transfers-service"
import { useNavigate } from "react-router-dom"
const TransferNew = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const initialValues = {
    fromAccountId: "",
    toAccountId: "",
    transactionAmount: "",
    currencyCode: "",
    description: "",
  }
  const validationSchema = Yup.object({
    fromAccountId: Yup.string().required("Please enter from account id"),
    toAccountId: Yup.string().required("Please enter to account id"),
    transactionAmount: Yup.string().required("Please enter amount"),
    currencyCode: Yup.string().required("Please enter currency code"),
    description: Yup.string().required("Please enter a description"),
  })
  const onSubmit = (values) => {
    setLoading(true)
    createTransfer(values)
      .then((resp) => {
        setLoading(false)
        toast("Transfer has been created successfully")
        navigate("/transfer")
      })
      .catch((err) => {
        toast(err.response.data.message)
        console.log(err.response.data.message)
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
              <Form.Label>From Account Id</Form.Label>
              <Form.Control
                className="p-2"
                style={{ border: "0.25px solid" }}
                type="text"
                placeholder="Enter from account id"
                {...formik.getFieldProps("fromAccountId")}
                isInvalid={!!formik.errors.fromAccountId}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.fromAccountId}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>To Account Id</Form.Label>
              <Form.Control
                className="p-2"
                style={{ border: "0.25px solid" }}
                type="text"
                placeholder="Enter to account id"
                {...formik.getFieldProps("toAccountId")}
                isInvalid={!!formik.errors.toAccountId}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.toAccountId}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Transaction Amount</Form.Label>
              <Form.Control
                className="p-2"
                style={{ border: "0.25px solid" }}
                type="text"
                placeholder="Enter transaction amount"
                {...formik.getFieldProps("transactionAmount")}
                isInvalid={!!formik.errors.transactionAmount}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.transactionAmount}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Currency Code</Form.Label>
              <Form.Select
                className="p-2"
                style={{ border: "0.25px solid" }}
                type="text"
                placeholder="Enter currency code"
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
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="p-2"
                style={{ border: "0.25px solid" }}
                type="text"
                placeholder="Enter a description"
                {...formik.getFieldProps("description")}
                isInvalid={!!formik.errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.description}
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
                onClick={() => navigate("/transfer")}
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
export default TransferNew
