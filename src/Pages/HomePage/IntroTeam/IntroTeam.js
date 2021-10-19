import { Button } from "react-bootstrap";
import React from "react";
import introTeam from "../../../images/team.png";
import "./IntroTeam.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const IntroTeam = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }} className="py-5">
      <h5>WE ARE THER FOR YOU</h5>
      <div className="underline mx-auto"></div>
      <h2 className="py-3">
        Always dedicated <br />{" "}
        <span className="color-orange title">Medicare Team</span>
      </h2>

      <img src={introTeam} className="team-Image" alt="" />
      <br />
      <br />
      <HashLink to="/aboutus#ourteam">
        <Button variant="primary">Read More Our Team</Button>
      </HashLink>
    </div>
  );
};

export default IntroTeam;
