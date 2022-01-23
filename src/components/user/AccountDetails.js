import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getAccountById } from "../../api/accounts-service";

const AccountDetails = ({ accountId }) => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getAccountById(accountId).then((resp) => {
      setAccount(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      {!loading && (
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>Account Description</td>
                  <td>{account.description}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account Id</td>
                  <td>{account.id}</td>
                </tr>
                <tr>
                  <td>Balance</td>
                  <td>{account.balance}</td>
                </tr>
                <tr>
                  <td>Currency Code</td>
                  <td>{account.currencyCode}</td>
                </tr>
                <tr>
                  <td>Account Type</td>
                  <td>{account.accountType}</td>
                </tr>
                <tr>
                  <td>Account Status Type</td>
                  <td>{account.accountStatusType}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={3}>
            <Button
              variant="secondary"
              className="w-100  bg-primary"
              onClick={() => navigate(-1)}
            >
              <FiArrowLeft /> Back to accounts
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AccountDetails;
