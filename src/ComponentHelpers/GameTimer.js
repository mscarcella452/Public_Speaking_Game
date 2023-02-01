import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { flexBoxSx } from "../SXstyles";

export default function GameTimer({ isActive, timerValue, completedSpeech }) {
  const [seconds, setSeconds] = useState(timerValue);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      if (seconds >= 0) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } else {
        clearInterval(interval);
        completedSpeech();
        setSeconds(timerValue);
      }
    }
    // console.log(`${(seconds / initialValue) * 100}px`);

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <Box
      sx={{
        ...flexBoxSx,
        height: "50px",
        width: "50px",
        background: "black",
        position: "relative",
        alignItems: "flex-end",
        overflow: "hidden",
        borderRadius: "50%",
        // background: "transparent",
      }}
    >
      <Box
        sx={{
          height: `${(seconds / timerValue) * 50}px`,
          width: "100%",
          background: "#981010",
        }}
      ></Box>
      <Box
        sx={{
          ...flexBoxSx,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          color: "#fff",
        }}
      >
        {`:${seconds}`}
      </Box>
      {/* <div>{seconds}</div> */}
    </Box>
  );
}
