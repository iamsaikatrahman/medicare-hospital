import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./DoctorCard.css";
const DoctorCard = ({ doctor }) => {
  const { name, image, designation } = doctor;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Card.Img className="card-image" variant="top" src={image} />
        <Card.Body className="card-name-container">
          <Card.Title style={{ color: "#fff", fontWeight: "700" }}>
            {name}
          </Card.Title>
          <Card.Text style={{ color: "#fff", fontWeight: "500" }}>
            {designation.toUpperCase()}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="d-flex justify-content-between">
            <span>Monday-Friday</span> <span>8:00-17:00</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between">
            <span>Saturday</span> <span>10:00-16:00</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between">
            <span>Sunday</span> <span>12:00-14:00</span>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="outline-primary">Read Profile</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DoctorCard;
