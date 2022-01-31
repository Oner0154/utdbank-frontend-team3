import React from "react";
import TransfersByUserId from "../../../components/manager/transfers/TransfersByUserId";
import Footer from "../../../components/common/Footer";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import Topbar from "../../../components/common/Topbar";

const TransfersByUserIdPageManager = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="Transfers by User" image="money-transfer.jpg" />
      <Spacer />
      <TransfersByUserId />
      <Spacer />
      <Footer />
    </>
  );
};

export default TransfersByUserIdPageManager;
