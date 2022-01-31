import React from "react";
import Footer from "../../../components/common/Footer";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import Topbar from "../../../components/common/Topbar";
import TransferDetails from "../../../components/employee/transfers/TransferDetails";

const TransferDetailsPageEmployee = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="Transfer Details" image="money-transfer.jpg" />
      <Spacer />
      <TransferDetails />
      <Spacer />
      <Footer />
    </>
  );
};

export default TransferDetailsPageEmployee;
