import React from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Footer from "../../components/common/Footer"
import PageHeader from "../../components/common/PageHeader"
import Spacer from "../../components/common/Spacer"
import Topbar from "../../components/common/Topbar"
import AccountEdit from "../../components/manager/AccountsEdit"

const AccountsEditPage = () => {
  const { accountNo } = useParams()
  return (
    <>
      {" "}
      <Topbar />
      <PageHeader title="Account Management" />
      <Container className="mt-5">
        <AccountEdit accountNo={accountNo} />
      </Container>
      <Spacer />
      <Footer />
    </>
  )
}

export default AccountsEditPage
