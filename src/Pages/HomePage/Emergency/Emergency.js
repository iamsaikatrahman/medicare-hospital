import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Emergency.css";

const Emergency = () => {
  return (
    <div className="mt-3">
      <Container>
        <div className="row g-4">
          <div className="col-12 col-md-4 col-lg-4 p-2 p-lg-5 emergency-container">
            <div className="d-flex">
              <div>
                <i
                  style={{ fontSize: "2rem" }}
                  className="bi bi-phone-fill"
                ></i>
              </div>
              <div className="text-start">
                <h3>Emergency Cases</h3>
                <p>
                  Please feel free to contact our friendly reception staff with
                  any general or medical enquiry.
                </p>
                <i
                  style={{ fontSize: "1.5rem" }}
                  className="bi bi-telephone-fill"
                ></i>{" "}
                <span style={{ fontSize: "1.5rem" }}>(775)-583-3011</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 p-2 p-lg-5 timetable-container">
            <div className="d-flex">
              <div>
                <i
                  style={{ fontSize: "2rem" }}
                  className="bi bi-calendar-week-fill me-2"
                ></i>
              </div>
              <div className="text-start">
                <h3>Doctors Timetable</h3>
                <p>
                  Qualified doctors available six days a week view our timetable
                  to make an appointment.
                </p>
                <Button variant="primary">View Time Table</Button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 p-2 p-lg-5 opening-container">
            <div className="d-flex">
              <div>
                <i
                  style={{ fontSize: "2rem" }}
                  className="bi bi-hourglass-split"
                ></i>
              </div>
              <div>
                <h3 className="mb-3">Opening Hours</h3>
                <div>Monday-Friday 8:00-7:00pm</div>
                <hr />
                <div>Saturday 9:00-10:00pm</div>
                <hr />
                <div>Sunday 10:00-12:00pm</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Emergency;
