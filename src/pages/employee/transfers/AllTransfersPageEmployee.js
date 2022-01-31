import React from "react";
import Transfers from "../../../components/employee/transfers/Transfers";
import Footer from "../../../components/common/Footer";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import Topbar from "../../../components/common/Topbar";

const AllTransfersPageEmployee = () => {
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

export default AllTransfersPageEmployee;
