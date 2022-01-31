import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table, Container, Button, Col, Row, Accordion } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { getTransferByTransferId } from "../../../api/admin-transfers-service";

const TransferDetails = () => {
  const [loading, setLoading] = useState(true);
  const [transfers, setTransfers] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getTransferByTransferId(id).then((resp) => {
      console.log(resp.data);
      setTransfers(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <Container>
          <Button
            variant="secondary"
            className="mb-3"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft /> Back to transfers
          </Button>
          <Row>
            <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Transfer Details</Accordion.Header>
                  <Accordion.Body>
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>User Id</td>
                          <td>{transfers.userId}</td>
                        </tr>
                        <tr>
                          <td>Account (From)</td>
                          <td>{transfers.fromAccountId}</td>
                        </tr>
                        <tr>
                          <td>Account (To)</td>
                          <td>{transfers.toAccountId}</td>
                        </tr>
                        <tr>
                          <td>Transaction Amount</td>
                          <td>{transfers.transactionAmount}</td>
                        </tr>
                        <tr>
                          <td>Currency</td>
                          <td>{transfers.currencyCode}</td>
                        </tr>
                        <tr>
                          <td>Description</td>
                          <td>{transfers.description}</td>
                        </tr>
                        <tr>
                          <td>Transaction Date</td>
                          <td>
                            {moment(transfers.transactionDate).format("lll")}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TransferDetails;
