import React from "react";
import { btnSx, fabricOverlaySx, Sx, flexBoxSx } from "../Styles/SXstyles";
import { Button, Paper } from "@mui/material";

function RulesBox({ children }) {
  return (
    <Paper
      sx={{
        ...flexBoxSx,
        position: "relative",
        backgroundColor: Sx.color.secondary,
        color: "#fff",
        padding: ".5rem",
        borderRadius: "5px",
        fontWeight: "100",
      }}
    >
      <Paper sx={{ ...fabricOverlaySx, opacity: 0.8 }} />
      {children}
    </Paper>
  );
}

export default RulesBox;

const rulesBoxesSx = {
  ...flexBoxSx,
  padding: ".5rem",
  borderRadius: "5px",
  //   ...fabricBackgroundSx,
  backgroundColor: Sx.color.secondary,
  color: "#fff",
  fontWeight: "100",
};
