import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="current-time">
      <h2>Current Time</h2>
      <div className="time-display">{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default CurrentTime;
