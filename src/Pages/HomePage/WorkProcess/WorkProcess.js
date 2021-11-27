import React from "react";
import { Container, Button } from "react-bootstrap";
import "./WorkProcess.css";

const WorkProcess = () => {
  return (
    <div className="work-pocess-BG">
      <Container className="py-5">
        <h4 className="text-center fw-bold">Working Process</h4>
        <div className="underline mx-auto"></div>
        <h2 className="text-center color-orange my-3 fw-bold">How we Works?</h2>
        <div className="row gap-4 gap-lg-0 py-5">
          <div className="col col-lg-4">
            <div
              className="card mx-auto p-3 text-start  shadow"
              style={{
                width: "18rem",
                borderRadius: "15px",
                borderColor: "transparent",
              }}
            >
              <h1 className="color-orange fw-bold">01</h1>
              <p className="color-orange fw-bold">Make Appointment</p>
              <p className="py-3">
                At first locate a doctor. Know if you have health insurance.
                Make an appointment time that works for you. Come prepared and
                bring with you important documents. Come early to your
                appointment.
              </p>
              <Button variant="primary" className="fw-bold">
                View More
              </Button>
            </div>
          </div>
          <div className="col col-lg-4">
            <div
              className="treatment-Container card mx-auto p-3 text-start text-white shadow"
              style={{
                width: "18rem",
                borderRadius: "15px",
                borderColor: "transparent",
                backgroundColor: "#f26031",
              }}
            >
              <h1 className="fw-bold">02</h1>
              <p className="fw-bold">Take Treatment</p>
              <p className="py-3">
                Medical professionals use medicine, therapy, surgery, and other
                treatments to help lessen the symptoms and effects of a disease.
                Sometimes these treatments are cures.
              </p>
              <Button variant="light" className="fw-bold">
                View More
              </Button>
            </div>
          </div>
          <div className="col col-lg-4">
            <div
              className="card mx-auto p-3 text-start  shadow"
              style={{
                width: "18rem",
                borderRadius: "15px",
                borderColor: "transparent",
              }}
            >
              <h1 className="color-orange fw-bold">03</h1>
              <p className="color-orange fw-bold">Registration</p>
              <p>
                Whern a Patient registration forms are used to register Patients
                will be able to provide their personal information, write down
                their medical histories, attach files, and submit payments all
                at once.
              </p>
              <Button variant="primary" className="fw-bold">
                View More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkProcess;
