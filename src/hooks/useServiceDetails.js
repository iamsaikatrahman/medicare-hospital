import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  const [serviceDetails, setServiceDetails] = useState([]);
  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) =>
        setServiceDetails(data.services.find((item) => item.id === serviceId))
      );
  }, [serviceId]);
  return [serviceDetails];
};
export default useServiceDetails;
