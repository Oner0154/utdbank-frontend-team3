import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import Topbar from "../../../components/common/Topbar";
import Users from "../../../components/manager/users/Users";
import Spacer from "../../../components/common/Spacer";
import Footer from "../../../components/common/Footer";

const UsersPageManager = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="User Management" image="article-img.png" />
      <Spacer size="50" />
      <Container>
        <Users />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default UsersPageManager;
