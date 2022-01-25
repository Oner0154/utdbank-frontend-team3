import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Topbar from "../../components/common/Topbar";
import AccountNew from "../../components/user/AccountNew";

const AccountsNewPage = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="Account Creat" />
      <Spacer />
      <Container>
        <AccountNew />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default AccountsNewPage;
