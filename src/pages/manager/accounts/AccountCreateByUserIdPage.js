import React from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Footer from "../../../components/common/Footer"
import PageHeader from "../../../components/common/PageHeader"
import Spacer from "../../../components/common/Spacer"
import Topbar from "../../../components/common/Topbar"
import AccountCreateByUserId from "../../../components/manager/accounts/AccountCraeteByUserId"

const AccountCreateByUserIdPage = () => {
  const { userId } = useParams()

  return (
    <>
      <Topbar />
      <PageHeader
        title={`Account Management of User Id : ${userId}`}
        image="accounts-pageheader-background-enginakyurt.jpg"
      />
      <Spacer />
      <Container className="mt-5">
        <AccountCreateByUserId userId={userId} />
      </Container>
      <Spacer />
      <Footer />
    </>
  )
}

export default AccountCreateByUserIdPage
