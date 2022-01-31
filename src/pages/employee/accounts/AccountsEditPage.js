import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../../components/common/Footer";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import Topbar from "../../../components/common/Topbar";
import AccountEdit from "../../../components/employee/accounts/AccountsEdit";

const AccountsEditPage = () => {
  const { accountNo } = useParams();
  return (
    <>
      <Topbar />
      <PageHeader
        title="Account Management"
        image="accounts-pageheader-background-enginakyurt.jpg"
      />
      <Spacer />
      <Container className="mt-5">
        <AccountEdit accountNo={accountNo} />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default AccountsEditPage;
