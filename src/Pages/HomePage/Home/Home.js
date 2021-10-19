import React from "react";
import Banner from "../Banner/Banner";
import Emergency from "../Emergency/Emergency";
import TopServices from "../TopServices/TopServices";
import "./Home.css";

const Home = () => {
  return (
    <div className="padding-top">
      <Banner />
      <Emergency />
      <TopServices />
    </div>
  );
};

export default Home;
