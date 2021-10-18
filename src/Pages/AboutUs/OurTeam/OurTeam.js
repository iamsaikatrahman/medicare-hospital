import React from "react";
import { Container } from "react-bootstrap";
import useDoctors from "../../../hooks/useDoctors";
import DoctorCard from "../DoctorCard/DoctorCard";

const OurTeam = () => {
  const [doctors] = useDoctors();
  return (
    <Container>
      <div className="py-5">
        <h2 className="title">
          Our <span className="color-orange">Team</span>
        </h2>
        <div className="underline mx-auto mt-3"></div>
        <p className="subtitle mt-3">
          We have many specialist medical teams. We help you{" "}
          <br className="d-none d-md-block" /> enjoy a better healthy life
          through our treatment.
        </p>
        {/* doctor card */}
        <div className="row g-4 mt-3">
          {doctors.map((data) => (
            <DoctorCard key={data.id} doctor={data} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurTeam;
