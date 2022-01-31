import React from "react";
import PageHeader from "../../../components/common/PageHeader";
import Topbar from "../../../components/common/Topbar";
import Spacer from "../../../components/common/Spacer";
import Footer from "../../../components/common/Footer";
import UserEdit from "../../../components/manager/users/UserEdit";
import { Container } from "react-bootstrap";

const UserEditPageManager = () => {
  return (
    <>
      <Topbar />
      <PageHeader title="User Management" image="article-img.png" />
      <Spacer size="50" />
      <Container>
        <UserEdit />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default UserEditPageManager;
