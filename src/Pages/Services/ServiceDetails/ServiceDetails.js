import React from "react";
import { useParams } from "react-router";
import useServiceDetails from "../../../hooks/useServiceDetails";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetails] = useServiceDetails(serviceId);
  const { name } = serviceDetails;
  return (
    <div className="padding-top">
      <h2>Service details</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ServiceDetails;
