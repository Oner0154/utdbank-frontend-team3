import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

import { getAccountByUserId } from "../../api/admin-service";

const AccountsByUserId = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    getAccountByUserId(userId).then((resp) => {
      setAccounts(resp.data);
      console.log(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Account No</th>
            <th>Description</th>
            <th>Balance</th>
            <th>Currency Code</th>
            <th>Account Type</th>
            <th>Account Status Type</th>
            <th>Account Created Date</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={6}>Loading...</td>
            </tr>
          )}
          {accounts.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.accountNo}</td>
              <td>{item.description} </td>
              <td>{item.balance}</td>
              <td>{item.currencyCode}</td>
              <td>{item.accountType}</td>
              <td>{item.accountStatusType}</td>
              <td>{moment(item.createdDate).format("MM/DD/YYYY HH:mm:ss")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonGroup aria-label="Basic example">
        <Button
          onClick={() => navigate(`/account/${userId}/create`)}
          variant="primary"
          disabled={loading}
        >
          New Account
        </Button>
        <Button
          variant="secondary"
          type="button"
          variant="secondary"
          onClick={() => navigate(-1)}
        >
          Back to Accounts
        </Button>
      </ButtonGroup>
    </>
  );
};

export default AccountsByUserId;
