import moment from "moment";
import React, { useEffect, useState } from "react";
import { Image, Table, Spinner, Button, ButtonGroup } from "react-bootstrap";
import { BiMessageSquareEdit } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { downloadTransfers, getTransfers } from "../../api/transfers-service";
import fileDownloader from "js-file-download";

const Transfers = () => {
  const [loading, setLoading] = useState(true);
  const [transfers, setTransfers] = useState([]);
  const navigate = useNavigate();

  const [loadingUsers, setLoadingUsers] = useState(true);
  const [downloadingUsers, setDownloadingUsers] = useState(false);
  const [users, setUsers] = useState([]);

  const handleDownload = () => {
    setDownloadingUsers(true);
    downloadTransfers().then((resp) => {
      console.log(resp.data);
      fileDownloader(resp.data, "users.xlsx");
      setDownloadingUsers(false);
    });
  };
  const handleEdit = (transferId) => {
    navigate(`/transfer/${transferId}`);
  };

  const showDetails = (id) => {
    navigate(`/transfer/${id}`);
  };

  useEffect(() => {
    getTransfers().then((resp) => {
      setTransfers(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <ButtonGroup aria-label="Basic example" className="p-3 ">
        <Button variant="primary" as={Link} to="/transfer/create">
          New Transfer
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
            <th>From account id</th>
            <th>To account id</th>
            <th>Transaction Amount</th>
            <th>Currency Code</th>
            <th>Description</th>
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
          {transfers.map((item, index) => (
            <tr
              key={index}
              onClick={() => showDetails(item.id)}
              className="cursor-hand"
            >
              <td>{index + 1}</td>
              <td>{item.fromAccountId}</td>
              <td>{item.toAccountId}</td>
              <td>{item.transactionAmount} </td>
              <td>{item.currencyCode}</td>
              <td> {item.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Transfers;
