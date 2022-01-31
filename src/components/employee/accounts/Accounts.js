import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { getAllAccounts } from "../../../api/admin-service";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const showDetails = (accountNo) => {
    navigate(`/account/${accountNo}/employee`);
  };

  const showDetailsById = (userId) => {
    navigate(`/account/user/${userId}/employee`);
  };

  useEffect(() => {
    getAllAccounts().then((resp) => {
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
            <th>#</th>
            <th>Account No</th>
            <th>Balance</th>
            <th>Currency Code</th>
            <th>Account Type</th>
            <th>Account Status Type</th>
            <th>Description</th>
            <th>User Id</th>
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
              <td style={{ cursor: "pointer" }}>{index + 1}</td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => showDetails(item.accountNo)}
              >
                {item.accountNo}
              </td>
              <td style={{ cursor: "pointer" }}>{item.balance}</td>
              <td style={{ cursor: "pointer" }}>{item.currencyCode} </td>
              <td style={{ cursor: "pointer" }}>{item.accountType}</td>
              <td style={{ cursor: "pointer" }}>{item.accountStatusType}</td>
              <td style={{ cursor: "pointer" }}>{item.description}</td>
              <td
                onClick={() => showDetailsById(item.userId)}
                style={{ cursor: "pointer" }}
              >
                {item.userId}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Accounts;
