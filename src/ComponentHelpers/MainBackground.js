import React from "react";
import {
  flexBoxSx,
  fabricOverlaySx,
  backgroundWordsOverlaySx,
} from "../SXstyles";
import { Paper, Box } from "@mui/material";
// import backgroundWords from "../Images/backgroundWords.png";

export default function MainBackground({ timerValue, seconds, children }) {
  return (
    <Paper sx={{ ...backgroundPageSx, gap: ".5rem" }}>
      <Box sx={{ ...timerOverlaySx, opacity: seconds / timerValue }} />
      <Box sx={fabricOverlaySx} />
      <Box sx={backgroundWordsOverlaySx} />
      {children}
    </Paper>
  );
}

const backgroundPageSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "space-between",
  background: "transparent",
  overflow: "hidden",
  padding: "2rem",
  background: "#fff",
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
