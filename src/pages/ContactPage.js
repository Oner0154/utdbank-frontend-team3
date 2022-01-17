import React from "react";
import PageHeader from "../components/common/PageHeader";
import Contact from "../components/contact/Contact";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Contact Us" image="contact-us-bg.png" />

      <Contact />
      <ContactForm />
    </>
  );
};

export default ContactPage;
