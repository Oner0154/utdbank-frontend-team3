import React from "react";

import Contact from "../components/contact/Contact";
import ContactForm from "../components/common/ContactForm";
import PageHeader from "../components/common/PageHeader";
import Topbar from "../components/common/Topbar";
import Footer from "../components/common/Footer";

const ContactPage = () => {
  return (
    <>
      <Topbar />
      <PageHeader image="contact-us-bg.png" title="Contact Us" />
      <Contact />
      <ContactForm formTitle="Leave a message" buttonTitle="Send A Message" />
      <Footer />
    </>
  );
};

export default ContactPage;
