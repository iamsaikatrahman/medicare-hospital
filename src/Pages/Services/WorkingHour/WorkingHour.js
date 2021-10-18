import React from "react";
import { Container } from "react-bootstrap";
import "./WorkingHour.css";

const WorkingHour = () => {
  return (
    <div className="working-hour-container py-3">
      <h2 className="title pt-3">Working Hours</h2>
      <div className="underline mx-auto"></div>
      <Container>
        <div className="row g-4 mt-3">
          <div className="col-12  col-lg-4">
            <div className="d-flex justify-content-center">
              <div className="me-5">
                <div className="day mt-5">SUN</div>
                <p className="subtitle ">Closed</p>
              </div>
              <div>
                <div className="day">MON</div>
                <p className="subtitle ">09:00-18:00</p>
              </div>
            </div>
          </div>
          <div className="col-12  col-lg-4">
            <div className="d-flex justify-content-center">
              <div className="me-5">
                <div className="day">TUE</div>
                <p className="subtitle ">09:00-18:00</p>
              </div>
              <div className="me-5">
                <div className="day mt-5">WED</div>
                <p className="subtitle ">09:00-18:00</p>
              </div>
              <div>
                <div className="day">THU</div>
                <p className="subtitle ">09:00-18:00</p>
              </div>
            </div>
          </div>
          <div className="col-12  col-lg-4">
            <div className="d-flex justify-content-center">
              <div className="me-5">
                <div className="day">FRI</div>
                <p className="subtitle ">09:00-18:00</p>
              </div>
              <div className="me-5">
                <div className="day mt-5">SAT</div>
                <p className="subtitle ">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkingHour;
