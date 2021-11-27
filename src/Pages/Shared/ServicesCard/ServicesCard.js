import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, name, image, shotDes } = service;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Card className="mx-auto h-100" style={{ width: "18rem" }}>
        <Card.Img variant="top" className="card-image" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{shotDes}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/detailsservice/${_id}`}>
            <Button variant="primary">Read More</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ServicesCard;
