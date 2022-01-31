import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../../components/common/PageHeader";
import Topbar from "../../../components/common/Topbar";
import Users from "../../../components/employee/users/Users";
import Spacer from "../../../components/common/Spacer";
import Footer from "../../../components/common/Footer";

const UsersPage = () => {
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

export default UsersPage;
