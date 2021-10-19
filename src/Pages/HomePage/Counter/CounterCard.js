import React, { useEffect, useState } from "react";

const CounterCard = (props) => {
  const { label, number, duration } = props.data;
  const [count, setCount] = useState("0");
  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number.substring(0, 3));
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // dependency array
  }, [number, duration]);
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <h2 className="title">{count}+</h2>
      <h5 className="subtitle">{label}</h5>
    </div>
  );
};

export default CounterCard;
