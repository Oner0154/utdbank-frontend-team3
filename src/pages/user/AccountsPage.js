import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Topbar from "../../components/common/Topbar";
import Accounts from "../../components/user/Accounts";

const AccountsPage = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="Accounts" />

      <Container>
        <Row>
          <Col>
            <Accounts />
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default AccountsPage;
