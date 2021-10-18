import React from "react";
import Banner from "../Banner/Banner";
import TopServices from "../TopServices/TopServices";
import "./Home.css";

const Home = () => {
  return (
    <div className="padding-top">
      <Banner />
      <TopServices />
    </div>
  );
};

export default Home;
