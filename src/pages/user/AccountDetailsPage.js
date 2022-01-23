import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Topbar from "../../components/common/Topbar";
import AccountDetails from "../../components/user/AccountDetails";

const AccountsNewPage = () => {
  const { accountId } = useParams();
  return (
    <>
      <Topbar />
      <PageHeader title="Account Details" />
      <Container className="mt-5">
        <AccountDetails accountId={accountId} />
      </Container>
      <Spacer />
    </>
  );
};

export default AccountsNewPage;
