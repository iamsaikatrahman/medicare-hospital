import React from "react";
import { Container } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import ServicesCard from "../../Shared/ServicesCard/ServicesCard";

const TopServices = () => {
  const [services] = useServices();
  return (
    <Container>
      <div className="py-5">
        <h2 className="title">
          Our <span className="color-orange">Services</span>
        </h2>
        <div className="underline mx-auto mt-3"></div>
        <p className="subtitle mt-3">
          We have many specialist medical teams. We help you{" "}
          <br className="d-none d-md-block" /> enjoy a better healthy life
          through our treatment.
        </p>
        {/* services card */}
        <div className="row g-4 mt-3">
          {services.slice(0, 6).map((data) => (
            <ServicesCard key={data._id} service={data} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TopServices;
