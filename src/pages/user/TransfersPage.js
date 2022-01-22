import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Topbar from "../../components/common/Topbar";
import Transfers from "../../components/user/Transfers";

const TransfersPage = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="Transfers" />

      <Container>
        <Row>
          <Col>
            <Transfers />
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default TransfersPage;
