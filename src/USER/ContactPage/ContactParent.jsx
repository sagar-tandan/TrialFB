import React from "react";
import Header from "../Header";
import IntroComp from "./IntroComp";
import ContactForm from "./ContactForm";
import LastComp from "./LastComp";
import Footer from "../Footer";

const ContactParent = () => {
  return (
    <div className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      <Header />
      <IntroComp />
      <ContactForm />
      <LastComp />
      <hr className="border-[#202020] border-[1px]" />
      <Footer />
    </div>
  );
};

export default ContactParent;
