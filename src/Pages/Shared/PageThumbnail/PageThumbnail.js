import React from "react";
import { Container } from "react-bootstrap";
import "./PageThumbnail.css";

const PageThumbnail = ({ title, subtitle, img }) => {
  return (
    <div className="page-thumbnail-container">
      <div className="d-flex align-items-center page-thumbnail text-md-start">
        <Container>
          <h2 className="title">
            {title} <span className="color-orange">{subtitle}</span>
          </h2>
          <div className="underline mx-auto mx-md-0"></div>
          <p className="subtitle mt-3">
            We promise to take care of our patient’s health and we do{" "}
            <br className="d-none d-md-block" /> our best. We have many
            specialist medical teams. We help you{" "}
            <br className="d-none d-md-block" /> enjoy a better healthy life
            through our treatment.
          </p>
        </Container>
      </div>
      <img className="thumbnail-image" src={img} alt="" />
    </div>
  );
};

export default PageThumbnail;
