import React from "react";
import Transfers from "../../../components/manager/transfers/Transfers";
import Footer from "../../../components/common/Footer";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import Topbar from "../../../components/common/Topbar";

const AllTransfersPageManager = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="All Transfers" image="money-transfer.jpg" />
      <Spacer />
      <Transfers />
      <Spacer />
      <Footer />
    </>
  );
};

export default AllTransfersPageManager;
