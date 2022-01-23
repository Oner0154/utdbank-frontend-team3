import React, { useEffect, useState } from "react";
import { Table, Spinner, Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAccounts } from "../../api/accounts-service";

const Accounts = () => {
  const [loading, setLoading] = useState(true);
  const [Accounts, setAccounts] = useState([]);
  const navigate = useNavigate();

  const showDetails = (id) => {
    navigate(`/account/${id}`);
  };

  useEffect(() => {
    getAccounts().then((resp) => {
      console.log(resp.data);
      setAccounts(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <ButtonGroup aria-label="Basic example" className="p-3 ">
        <Button variant="primary" as={Link} to="/account/create">
          New account
        </Button>
      </ButtonGroup>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>

            <th>Description</th>
            <th>Balance</th>
            <th>Currency Code</th>
            <th>Account Type</th>
            <th>Account Status Type</th>
            <th>Account Id</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={5}>
                <Spinner animation="border" size="sm" /> Loading...
              </td>
            </tr>
          )}
          {Accounts.map((item, index) => (
            <tr
              key={index}
              onClick={() => showDetails(item.id)}
              className="cursor-hand"
            >
              <td>{index + 1}</td>
              <td>{item.description}</td>
              <td>{item.balance}</td>
              <td>{item.currencyCode} </td>
              <td>{item.accountType}</td>
              <td>{item.accountStatusType}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Accounts;
