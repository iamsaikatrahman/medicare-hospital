import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import notFound from "../../images/404.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="padding-top not-found-container">
      <div className="mx-auto error-content">
        <div>
          <img src={notFound} className="notfoundimag" alt="" />
          <h2 className="title">OOPS...!! Page Not Found</h2>
          <p className="subtitle">
            Seems like you have assembled the page incorrectly
          </p>
          <Link to="/">
            <Button>Back To Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
