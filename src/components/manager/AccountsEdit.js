import React, { useState, useEffect } from "react"
import * as Yup from "yup"
import { toast } from "react-toastify"
import { useFormik } from "formik"
import { Form, Button, Spinner, Row, Col, ButtonGroup } from "react-bootstrap"
import alertify from "alertifyjs"
import { useNavigate, useParams } from "react-router-dom"
import {
  deleteAccounts,
  getAccountByAccountNo,
  updateAccounts,
} from "../../api/admin-service"
const AccountsEdit = () => {
  const [initialValues, setInitialValues] = useState({
    description: "",
    currencyCode: "",
    accountType: "",
    accountStatusType: "",
    balance: 0,
  })
  const [loading, setLoading] = useState(false)
  const { accountNo } = useParams()
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    description: Yup.string().required("Enter a description"),
    currencyCode: Yup.string().required("Enter the currency code"),
    accountType: Yup.string().required("Enter the account type"),
    accountStatusType: Yup.string().required("Select the account status type"),
    balance: Yup.number().required("Select the account balance"),
  })
  const onSubmit = (values) => {
    setLoading(true)
    const accountDto = {
      description: values.description,
      currencyCode: values.currencyCode,
      accountType: values.accountType,
      accountStatusType: values.accountStatusType,
      balance: values.balance,
    }
    updateAccounts(accountNo, values)
      .then((resp) => {
        setLoading(false)
        toast("The account was updated successfully")
        navigate("/manager/accounts")
      })
      .catch((err) => {
        toast("An error occured while updating the Account")
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
  const handleDelete = () => {
    alertify.confirm(
      "Delete",
      "Are you sure want to delete?",
      () => {
        setLoading(true)
        deleteAccounts(accountNo)
          .then((resp) => {
            toast("The account was deleted successfully")
            setLoading(false)
            navigate("/manager/accounts")
          })
          .catch((err) => {
            toast(err.response.data.message)
            console.log(err.response.data.message)
            setLoading(false)
          })
      },
      () => {}
    )
  }
  const loadAccount = (values) => {
    getAccountByAccountNo(accountNo, values).then((resp) => {
      console.log(resp.data)
      const {
        description,
        currencyCode,
        accountType,
        accountStatusType,
        balance,
        accountNo,
      } = resp.data
      const accountDto = {
        description: description,
        currencyCode: currencyCode,
        accountType: accountType,
        accountStatusType: accountStatusType,
        balance: balance,
        accountNo: accountNo,
      }
      setInitialValues(accountDto)
    })
  }
  useEffect(() => {
    loadAccount()
  }, [])
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Row>
        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Account No</Form.Label>
          <Form.Control
            className="p-2"
            style={{ border: "0.25px solid" }}
            type="text"
            name="accountNo"
            placeholder="Type accountNo"
            {...formik.getFieldProps("accountNo")}
            isInvalid={!!formik.errors.accountNo}
            disabled
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.accountNo}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="p-2"
            style={{ border: "0.25px solid" }}
            type="text"
            name="description"
            placeholder="Type a description"
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
            name="balance"
            placeholder="Type a description"
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
            placeholder="Type a currency code"
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
            {" "}
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
            <option>SUSPENDED</option>
            <option>CLOSED</option>
            <option>ACTIVE</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {formik.errors.accountStatusType}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className="text-end">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" type="submit" disabled={loading}>
            Update
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate("/manager/accounts")}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="danger"
            disabled={loading}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </Form>
  )
}
export default AccountsEdit
