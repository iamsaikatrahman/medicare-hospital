import React from "react";
import { Container } from "react-bootstrap";
import contactus from "../../images/contact-us.jpg";
import PageThumbnail from "../Shared/PageThumbnail/PageThumbnail";
import contact from "../../images/contact.png";

const ContactUs = () => {
  return (
    <div className="padding-top">
      <PageThumbnail title={"Contact"} subtitle={"Us"} img={contactus} />
      <Container>
        <h2 className="py-3">
          Send Us <br />{" "}
          <span className="color-orange title">Your Message</span>
        </h2>
        <div className="underline mx-auto"></div>
        <div className="d-flex flex-column flex-column-reverse flex-md-row align-items center py-5">
          <div className="w-100">
            <img src={contact} className="w-100" alt="" />
          </div>
          <div className="w-100 text-start">
            <form>
              <label htmlFor="name">
                Your Name<span className="text-danger">*</span>
              </label>
              <br />
              <input className="mb-3" type="text" name="name" />
              <br />
              <label htmlFor="email">
                Your Email<span className="text-danger">*</span>
              </label>
              <br />
              <input className="mb-3" type="email" name="email" />
              <br />
              <label htmlFor="phone">Your Phone</label>
              <br />
              <input className="mb-3" type="number" name="phone" />
              <br />
              <label htmlFor="message">
                Your Message<span className="text-danger">*</span>
              </label>
              <br />
              <textarea
                className="mb-3"
                name="message"
                cols="30"
                rows="3"
              ></textarea>
              <br />
              <button className="btn btn-primary">Submit Your Message</button>
            </form>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row g-4 py-5">
          <div className="col-12 col-md-6 col-lg-4 text-center">
            <i style={{ fontSize: "3rem" }} className="bi bi-geo-alt"></i>
            <h2 className="py-3">Address</h2>
            <p>
              27th Aveneue <br />
              New York, W2 3XE, US
            </p>
          </div>
          <div
            style={{
              borderLeft: "1px solid lightgray",
              borderRight: "1px solid lightgray",
            }}
            className="col-12 col-md-6 col-lg-4 text-center"
          >
            <i style={{ fontSize: "3rem" }} className="bi bi-phone"></i>
            <h2 className="py-3">Call Us</h2>
            <p>
              0-003-5334-4578 <br />
              0-003-5334-4578
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-center">
            <i style={{ fontSize: "3rem" }} className="bi bi-envelope"></i>
            <h2 className="py-3">Write To Us</h2>
            <p>
              office.medicare@gmail.com <br />
              support.medicare@gmail.com
            </p>
          </div>
        </div>
      </Container>
      <div style={{ backgroundColor: "#3851A2" }} className="py-3 text-white">
        <Container>
          <h2 className="title">Follow Us</h2>
          <div className="underline mx-auto"></div>
          <p className="pt-3">
            Find our what's hot and new, and get discounts for being a regular
            patient and Medicare fan.
          </p>
          <div className="py-5">
            <i style={{ fontSize: "3rem" }} className="bi bi-facebook mx-3"></i>
            <i style={{ fontSize: "3rem" }} className="bi bi-twitter mx-3"></i>
            <i
              style={{ fontSize: "3rem" }}
              className="bi bi-instagram mx-3"
            ></i>
            <i style={{ fontSize: "3rem" }} className="bi bi-linkedin mx-3"></i>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
