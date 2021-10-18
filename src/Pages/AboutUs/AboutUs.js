import React from "react";
import { Container, Button } from "react-bootstrap";
import aboutUs from "../../images/about-us.jpg";
import "./AboutUs.css";
import OurTeam from "./OurTeam/OurTeam";
import bookNow from "../../images/book-now.png";
import PageThumbnail from "../Shared/PageThumbnail/PageThumbnail";

const AboutUs = () => {
  return (
    <div className="padding-top">
      {/* page thumbnail */}
      <PageThumbnail img={aboutUs} title={"About"} subtitle={"Us"} />
      {/* Our Team */}
      <OurTeam />
      {/* book your doctor */}
      <div>
        <Container>
          <div className="d-flex flex-column flex-column-reverse flex-md-row align-items-center">
            <div className="w-100 text-md-start">
              <h2 className="title">
                Book a doctor's <br className="d-none d-md-block" /> appointment
                online
              </h2>
              <p className="my-3">
                some up and coming trends are healthcare consolidation for
                independent healthcare centers that see a cut in unforeseen
                payouts
              </p>
              <Button variant="primary">Book Now</Button>
            </div>
            <div className="w-100">
              <img src={bookNow} className="w-100" alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
