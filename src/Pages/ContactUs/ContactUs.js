import React from "react";
import contactus from "../../images/contact-us.jpg";
import PageThumbnail from "../Shared/PageThumbnail/PageThumbnail";

const ContactUs = () => {
  return (
    <div className="padding-top">
      <PageThumbnail title={"Contact"} subtitle={"Us"} img={contactus} />
    </div>
  );
};

export default ContactUs;
