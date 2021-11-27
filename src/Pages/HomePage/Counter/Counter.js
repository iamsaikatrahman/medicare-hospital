import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Counter.css";
import CounterCard from "./CounterCard";

const Counter = () => {
  const [counter, setCounter] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-cove-00674.herokuapp.com/counts")
      .then((res) => res.json())
      .then((data) => setCounter(data));
  }, []);
  return (
    <div className="counter-container">
      <Container>
        <h2 className="py-3 title">Counter</h2>
        <div className="underline mx-auto"></div>
        <div className="row g-4 py-5">
          {counter.map((item) => (
            <CounterCard key={item._id} data={item} />
          ))}
          {/* <CounterCard /> */}
        </div>
      </Container>
    </div>
  );
};

export default Counter;
