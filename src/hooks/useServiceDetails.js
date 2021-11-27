import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  const [serviceDetails, setServiceDetails] = useState([]);
  useEffect(() => {
    fetch(`https://afternoon-cove-00674.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, [serviceId]);
  return { serviceDetails };
};
export default useServiceDetails;
