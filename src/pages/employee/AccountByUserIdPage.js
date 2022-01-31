import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Topbar from "../../components/common/Topbar";
import AccountsByUserId from "../../components/employee/AccountsByUserId";

const AccountsByUserIdPage = () => {
  const { userId } = useParams();
  return (
    <>
      {" "}
      <Topbar />
      <PageHeader title={`Owner of account number ${userId}`} />
      <Container className="mt-5">
        <AccountsByUserId userId={userId} />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default AccountsByUserIdPage;
