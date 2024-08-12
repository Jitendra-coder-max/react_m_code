import React, { useEffect, useState } from "react";
import Timer from "./Timer";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // const increment = () => {

  //     setCount(prev => prev+1)
  // }
  return (
    <div>
      Counter
      {/* <button onClick={increment}>INCREMENT</button> */}
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
