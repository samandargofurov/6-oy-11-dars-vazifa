import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval

    if (isActive) {
      interval = setInterval(() => {
        if (seconds == 0) {
          if (minutes == 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(90);
    setSeconds(0);
  };
  return (
    <>
      <div className="container">
        <div className="app-container">
          <div className="timer-container">
            <h1 className="timer">
              {`${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`}
            </h1>
            <div className="button-container">
              <button
                className={`timer-button ${isActive ? "active" : ""}`}
                onClick={toggleTimer}
              >
                {isActive ? "Stop" : "Start"}
              </button>
              <button className="timer-button" onClick={resetTimer}>
                restart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
