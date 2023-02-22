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
        padding: { galaxyFold: ".5rem", xl: "1rem" },
        borderRadius: "5px",
        fontWeight: "100",
        // fontFamily: Sx.font.secondary,
      }}
    >
      <Paper sx={{ ...fabricOverlaySx }} />
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
  textShadow:
    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
};
