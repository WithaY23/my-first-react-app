import React, { useState, useEffect } from "react";
import Clock from "./clock";

export default function App() {
  //simple useState and useEffect demonstration, update the page without refreshing
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Update the time every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      <Clock time={currentTime} />
    </div>
  );
}

