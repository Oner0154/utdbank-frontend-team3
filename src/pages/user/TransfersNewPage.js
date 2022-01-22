import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Topbar from "../../components/common/Topbar";
import TransferNew from "../../components/user/TransferNew";

const TransfersNewPage = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="Transfer Creat" />
      <Spacer />
      <Container>
        <TransferNew />
      </Container>
      <Spacer />
    </>
  );
};

export default TransfersNewPage;
