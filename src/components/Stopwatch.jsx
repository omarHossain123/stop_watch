import React from "react";

const Stopwatch = ({ time, isRunning, onStart, onPause, onReset }) => {
  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="time-display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button onClick={onStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={onPause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
