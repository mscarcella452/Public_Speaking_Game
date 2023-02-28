import React from "react";
import { Sx, flexBoxSx } from "../../Styles/SXstyles";
import { FabricOverlay } from "./Overlays";
import { Paper } from "@mui/material";

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
      <FabricOverlay />
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
