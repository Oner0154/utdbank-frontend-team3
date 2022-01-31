import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accounts from "../../../components/employee/accounts/Accounts";
import Footer from "../../../components/common/Footer";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import Topbar from "../../../components/common/Topbar";

const AccountsPage = () => {
  return (
    <>
      <Topbar />
      <PageHeader
        title="Accounts"
        image="accounts-pageheader-background-enginakyurt.jpg"
      />
      <Spacer />
      <Container>
        <Row>
          <Col>
            <Accounts />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default AccountsPage;
