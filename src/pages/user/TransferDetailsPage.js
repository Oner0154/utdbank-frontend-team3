import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Topbar from "../../components/common/Topbar";
import TransferDetails from "../../components/user/TransferDetails";

const AccountsNewPage = () => {
  const { transferId } = useParams();
  return (
    <>
      <Topbar />
      <PageHeader title="Transfer Details" />
      <Spacer />
      <Container>
        <TransferDetails transferId={transferId} />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default AccountsNewPage;
