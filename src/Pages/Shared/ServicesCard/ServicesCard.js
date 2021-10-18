import React from "react";
import { Card, Button } from "react-bootstrap";

const ServicesCard = ({ service }) => {
  const { name, image } = service;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" className="card-image" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesCard;
