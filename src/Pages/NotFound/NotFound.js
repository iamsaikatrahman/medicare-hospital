import React from "react";
import notFound from "../../images/404.png";

const NotFound = () => {
  return (
    <div className="padding-top">
      <div>
        <img
          src={notFound}
          style={{ width: "200px", height: "200px" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
