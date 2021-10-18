import React from "react";
import { Container } from "react-bootstrap";
import brandLogo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <div className="row g-4">
          <div className="col-12 col-lg-4 text-lg-start brand-name">
            <img src={brandLogo} style={{ width: "50px" }} alt="MediCare" />{" "}
            MEDI
            <span className="color-orange">CARE</span>
          </div>
          <div className="col-12 col-lg-4"></div>
          <div className="col-12 col-lg-4 text-lg-start">
            <h2 className="contact-number mb-3">
              <i className="bi bi-telephone-fill"></i> (775)-583-3011
            </h2>
            <div className="d-flex justify-content-center">
              <div className="d-none d-lg-block">
                <i
                  style={{ fontSize: "2.5rem" }}
                  className="bi bi-phone-fill text-white me-3"
                ></i>
              </div>
              <div
                style={{ fontSize: "0.9rem" }}
                className="text-white text-lg-start"
              >
                <p>24/7 EMERGENCY NUMBER</p>
                <p>
                  Call us now if you are in a medical emergency need, we will
                  reply swiftly and provide you with a medical aid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
