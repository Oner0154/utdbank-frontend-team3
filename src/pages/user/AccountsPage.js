import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Topbar from "../../components/common/Topbar";
import Accounts from "../../components/user/Accounts";

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
