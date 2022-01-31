import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table, Spinner, Container, Button } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTransfersByUserId } from "../../../api/admin-transfers-service";

const TransfersByUserId = () => {
  const [loading, setLoading] = useState(true);
  const [transfers, setTransfers] = useState([]);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTransfersByUserId(userId).then((resp) => {
      console.log(resp.data);
      setTransfers(resp.data);
      setLoading(false);
    });
  }, []);
  return (
    <Container>
      <Button variant="secondary" className="mb-3" onClick={() => navigate(-1)}>
        <FiArrowLeft /> Back
      </Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>User Id</th>
            <th>Account (From)</th>
            <th>Account (To)</th>
            <th>Transaction Amount</th>
            <th>Currency</th>
            <th>Description</th>
            <th>Transaction Date</th>
            <th>Details</th>
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
            <tr key={index} className="cursor-hand">
              <td>{index + 1}</td>
              <td>{item.userId}</td>
              <td>{item.fromAccountId}</td>
              <td>{item.toAccountId}</td>
              <td>{item.transactionAmount} </td>
              <td>{item.currencyCode}</td>
              <td>{item.description}</td>
              <td>{moment(item.transactionDate).format("lll")}</td>
              <td>
                <Button as={Link} to={`/transfer/${item.id}/employee`}>
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TransfersByUserId;
