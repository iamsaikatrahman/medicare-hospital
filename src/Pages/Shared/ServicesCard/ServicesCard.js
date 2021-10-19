import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { id, name, image } = service;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" className="card-image" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link to={`/detailsservice/${id}`}>
            <Button variant="primary">Read More</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesCard;
