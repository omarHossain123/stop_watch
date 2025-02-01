import React, { useState, useEffect, useRef } from "react";
import Tabs from "./components/Tabs";
import Stopwatch from "./components/Stopwatch";
import CurrentTime from "./components/CurrentTime";
import "./App.css";

const App = () => {
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isStopwatchRunning) {
      intervalRef.current = setInterval(() => {
        setStopwatchTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isStopwatchRunning]);

  const startStopwatch = () => setIsStopwatchRunning(true);
  const pauseStopwatch = () => setIsStopwatchRunning(false);
  const resetStopwatch = () => {
    setStopwatchTime(0);
    setIsStopwatchRunning(false);
  };

  return (
    <div className="app">
      <h1>Stopwatch & Current Time</h1>
      <Tabs>
        <div label="Stopwatch">
          <Stopwatch
            time={stopwatchTime}
            isRunning={isStopwatchRunning}
            onStart={startStopwatch}
            onPause={pauseStopwatch}
            onReset={resetStopwatch}
          />
        </div>
        <div label="Current Time">
          <CurrentTime />
        </div>
      </Tabs>
    </div>
  );
};

export default App;
