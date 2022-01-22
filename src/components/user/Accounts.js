import moment from "moment";
import React, { useEffect, useState } from "react";
import { Image, Table, Spinner, Button, ButtonGroup } from "react-bootstrap";
import { BiMessageSquareEdit } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { downloadAccounts, getAccounts } from "../../api/accounts-service";
import fileDownloader from "js-file-download";

const Accounts = () => {
  const [loading, setLoading] = useState(true);
  const [Accounts, setAccounts] = useState([]);
  const navigate = useNavigate();

  const [loadingUsers, setLoadingUsers] = useState(true);
  const [downloadingUsers, setDownloadingUsers] = useState(false);
  const [users, setUsers] = useState([]);

  const handleDownload = () => {
    setDownloadingUsers(true);
    downloadAccounts().then((resp) => {
      console.log(resp.data);
      fileDownloader(resp.data, "users.xlsx");
      setDownloadingUsers(false);
    });
  };
  const handleEdit = (accountId) => {
    navigate(`/account/${accountId}`);
  };

  const showDetails = (id) => {
    navigate(`/account/${id}`);
  };

  useEffect(() => {
    getAccounts().then((resp) => {
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
        <Button
          variant="secondary"
          disabled={downloadingUsers}
          onClick={handleDownload}
        >
          {downloadingUsers && <Spinner animation="border" size="sm" />}{" "}
          Download List
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
              <td> {item.accountStatusType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Accounts;
