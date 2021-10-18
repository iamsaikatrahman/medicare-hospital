import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="banner">
          <img
            src={banner1}
            style={{ objectPosition: "top center" }}
            className="carousle-image"
            alt=""
          />
          <div className="banner-caption text-start">
            <h2>
              Providing Best <br className="d-none d-md-block" /> Medical Care
            </h2>
            <p className="banner-body-text">
              Taking care of your health is our first priority.{" "}
              <br className="d-none d-md-block" /> So we follow the best
              practice for your treatment.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="banner">
          <img src={banner2} className="carousle-image" alt="" />
        </div>
        <div className="banner-caption text-start">
          <h2>
            Healthy body <br className="d-none d-md-block" /> healthy life!
          </h2>
          <p className="banner-body-text">
            "{" "}
            <em>
              We believe that the greatest gift,{" "}
              <br className="d-none d-md-block" />
              we can give your family is your healthy life.
            </em>{" "}
            "
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="banner">
          <img src={banner3} className="carousle-image" alt="" />
        </div>
        <div className="banner-caption text-start">
          <h2>
            We care about <br className="d-none d-md-block" /> your smile!
          </h2>
          <p className="banner-body-text">
            "{" "}
            <em>
              A good laugh and a long sleep are{" "}
              <br className="d-none d-md-block" /> the best cures in the
              doctor’s book
            </em>{" "}
            "
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
