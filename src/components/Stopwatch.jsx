import React from "react";

const Stopwatch = ({ time, isRunning, onStart, onPause, onReset }) => {
  // Calculate hours, minutes, and seconds
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  // Format time values to always show two digits
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="time-display">
        <span>{formattedHours}:</span>
        <span>{formattedMinutes}:</span>
        <span>{formattedSeconds}</span>
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
