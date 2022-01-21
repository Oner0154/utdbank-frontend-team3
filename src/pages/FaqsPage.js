import React from "react";
import ContactForm from "../components/common/ContactForm";
import Footer from "../components/common/Footer";
import PageHeader from "../components/common/PageHeader";
import Topbar from "../components/common/Topbar";

import Faqs from "../components/faqs/Faqs";

const FaqsPage = () => {
  return (
    <><Topbar/>
      <PageHeader title="FAQS" image="blog.png" />
      <Faqs />
      <ContactForm
        formTitle="Do You Have Any Question?"
        buttonTitle="Submit A Question"
      />
      <Footer/>
    </>
  );
};

export default FaqsPage;
