import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Topbar from "../../components/common/Topbar";
import TransferNew from "../../components/user/TransferNew";

const TransfersNewPage = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="Create Transfer" image="money-transfer.jpg" />
      <Spacer />
      <Container>
        <TransferNew />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default TransfersNewPage;
