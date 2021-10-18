import React from "react";
import PageThumbnail from "../Shared/PageThumbnail/PageThumbnail";
import ourservies from "../../images/our-servies.jpg";
import OurServices from "./OurServices/OurServices";
import WorkingHour from "./WorkingHour/WorkingHour";

const Services = () => {
  return (
    <div className="padding-top">
      {/* page thumbnail */}
      <PageThumbnail img={ourservies} title={"Our"} subtitle={"Services"} />
      {/* our services */}
      <OurServices />
      {/* Working hours */}
      <WorkingHour />
    </div>
  );
};

export default Services;
