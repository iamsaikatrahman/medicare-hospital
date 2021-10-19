import React from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useServiceDetails from "../../../hooks/useServiceDetails";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetails] = useServiceDetails(serviceId);
  const { name, image, shotDes, price, detailsInfo } = serviceDetails;
  return (
    <div className="padding-top">
      <Container>
        <div className="d-flex flex-column flex-column-reverse flex-md-row align-items-center">
          <div className="w-100 text-md-start p-3">
            <h2 className="title">{name}</h2>

            <div className="underline mx-auto mx-lg-0 mb-3"></div>
            <p>{shotDes}</p>
            <h4 style={{ fontWeight: "700" }}>{price}</h4>
            <p>{detailsInfo}</p>
          </div>
          <div className="w-100">
            <img src={image} className="w-100 p-3" alt="" />
          </div>
        </div>
      </Container>
      <div style={{ backgroundColor: "#3851A2" }} className="py-3 text-white">
        <Container>
          <h2>Book Now {name}</h2>
          <div className="underline mx-auto"></div>
          <div className="py-5">
            <Link to="/appointment">
              <Button variant="primary">Book Now</Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ServiceDetails;
