import React, { useContext } from "react";
import {
  flexBoxSx,
  fabricOverlaySx,
  backgroundWordsOverlaySx,
} from "../SXstyles";
import { Paper, Box } from "@mui/material";
import { timerContext } from "../Context/TimerContext";

export default function MainBackground({ children }) {
  const timer = useContext(timerContext);
  return (
    <Paper sx={backgroundPageSx}>
      <Box
        sx={{ ...timerOverlaySx, opacity: timer.seconds / timer.startingValue }}
      />
      <Box sx={fabricOverlaySx} />
      <Box sx={backgroundWordsOverlaySx} />
      {children}
    </Paper>
  );
}

const backgroundPageSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  background: "transparent",
  overflow: "hidden",
  position: "relative",
};

const timerOverlaySx = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: "100%",
  width: "100%",
  background: "#981010",
};
