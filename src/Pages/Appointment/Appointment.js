import React from "react";
import { Container } from "react-bootstrap";
import "./Appointment.css";
import appointment from "../../images/appointment.png";

const Appointment = () => {
  return (
    <div className="padding-top appointment-container">
      <Container className="py-5">
        <h5 className="text-white">GET THE RIGHT MEDICAL CARE</h5>
        <div className="underline mx-auto"></div>
        <h2 className="py-5">
          Book with <br />{" "}
          <span className="color-orange title">Your Doctor</span>
        </h2>
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div className="w-100">
            <img src={appointment} className="w-100" alt="" />
          </div>
          <div className="w-100 text-start text-white appointment">
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
              <label htmlFor="doctor">Doctor Name</label>
              <br />
              <input className="mb-3" type="text" name="doctor" />
              <br />
              <label htmlFor="message">
                Additional Message<span className="text-danger">*</span>
              </label>
              <br />
              <textarea
                className="mb-3"
                name="message"
                cols="30"
                rows="3"
              ></textarea>
              <br />
              <button className="btn btn-primary w-100">Book Now</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
