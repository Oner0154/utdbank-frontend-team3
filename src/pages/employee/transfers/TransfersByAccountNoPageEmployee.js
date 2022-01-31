import React from "react";
import Footer from "../../../components/common/Footer";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import Topbar from "../../../components/common/Topbar";
import TransfersByAccountNo from "../../../components/employee/transfers/TransfersByAccountNo";

const TransfersByAccountNoPageEmployee = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="Transfers by Accounts" image="money-transfer.jpg" />
      <Spacer />
      <TransfersByAccountNo />
      <Spacer />
      <Footer />
    </>
  );
};

export default TransfersByAccountNoPageEmployee;
