import React, { useState, useEffect } from "react";

export default function GameTimer({ isActive, toggleActive }) {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <div>{seconds}</div>
    </>
  );
}
