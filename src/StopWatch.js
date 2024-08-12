import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState(0);
  const [timerId, setTimerId] = useState(false);

  // useEffect(() => {

  // },[])

  const startWatch = () => {
    if (!timerId) {
      const timer = setInterval(() => {
        setStartTime((prev) => prev + 1);
      }, 1000);
      setTimerId(timer);
      console.log(timer);
    }
  };

  const stopTime = () => {
    if (timerId) {
      clearInterval(timerId);

      setTimerId(null);
    }

    console.log("stop");
  };

  const resetTime = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
    setStartTime(0);
  };

  let hour = Math.floor(startTime / 3600);

  let min = Math.floor((startTime % 3600) / 60);

  let sec = Math.floor(startTime % 60);

  return (
    <div>
      StopWatch
      <button onClick={startWatch}>start watch</button>
      <button onClick={stopTime}>Stop watch</button>
      <button onClick={resetTime}>reset watch</button>
      {/* <p>{startTime}</p> */}
      <p>
        {hour.toString().padStart(2, "0")}: {min.toString().padStart(2, "0")}:
        {sec.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default StopWatch;
