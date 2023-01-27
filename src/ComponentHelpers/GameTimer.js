import React, { useState, useEffect } from "react";

export default function GameTimer({ isActive, initialValue, completedSpeech }) {
  const [seconds, setSeconds] = useState(initialValue);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds >= 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      completedSpeech();
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <div>{seconds}</div>
    </>
  );
}
