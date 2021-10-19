import React from "react";
import { Container } from "react-bootstrap";
import founder from "../../../images/doctors/d-1.jpg";
import "./Founder.css";

const Founder = () => {
  return (
    <div>
      <Container>
        <div className="d-flex flex-column flex-md-row align-items-center py-5">
          <div className="w-100 founder-img">
            <img src={founder} className="w-100" alt="" />
          </div>
          <div className="w-100 text-md-start px-3 founder-speech">
            <h4>Intoduction Our Founder</h4>
            <div className="underline mx-auto mx-md-0"></div>
            <h2 className="title py-3">
              <span className="color-orange">Great Passion</span> <br /> for
              healing
            </h2>
            <p className="subtitle">
              We provide the highest level of care for your health. We try the
              best treatment for our patients. We take on challenges every day
              for the best treatment of our patients.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Founder;
