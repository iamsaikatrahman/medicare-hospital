import React from "react";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Emergency from "../Emergency/Emergency";
import Founder from "../Founder/Founder";
import IntroTeam from "../IntroTeam/IntroTeam";
import TopServices from "../TopServices/TopServices";
import WorkProcess from "../WorkProcess/WorkProcess";
import "./Home.css";

const Home = () => {
  return (
    <div className="padding-top">
      <Banner />
      <Emergency />
      <Founder />
      <TopServices />
      <Counter />
      <IntroTeam />
      <WorkProcess />
    </div>
  );
};

export default Home;
