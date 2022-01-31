import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table, Spinner, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllTransfers } from "../../../api/admin-transfers-service";

const Transfers = () => {
  const [loading, setLoading] = useState(true);
  const [transfers, setTransfers] = useState([]);

  const navigate = useNavigate();

  const showTransfersByTransferId = (id) => {
    navigate(`/transfer/${id}/employee`);
  };

  const showTransfersByUserId = (userId) => {
    navigate(`/transfer/user/${userId}/employee`);
  };

  const showTransfersByAccountNo = (accountNo) => {
    navigate(`/transfer/${accountNo}/accountNo/employee`);
  };

  useEffect(() => {
    getAllTransfers().then((resp) => {
      console.log(resp.data);
      setTransfers(resp.data);
      setLoading(false);
    });
  }, []);
  return (
    <Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>User Id</th>
            <th>Transfer Id</th>
            <th>Account (From)</th>
            <th>Account (To)</th>
            <th>Transaction Amount</th>
            <th>Currency</th>
            <th>Description</th>
            <th>Transaction Date</th>
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
            <tr key={index}>
              <td>{index + 1}</td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => showTransfersByUserId(item.userId)}
              >
                {item.userId}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => showTransfersByTransferId(item.id)}
              >
                {item.id}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => showTransfersByAccountNo(item.fromAccountId)}
              >
                {item.fromAccountId}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => showTransfersByAccountNo(item.toAccountId)}
              >
                {item.toAccountId}
              </td>
              <td>{item.transactionAmount} </td>
              <td>{item.currencyCode}</td>
              <td>{item.description}</td>
              <td>{moment(item.transactionDate).format("lll")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Transfers;
