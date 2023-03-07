import React from "react";
import { Textfit } from "react-textfit";
import { Sx, flexBoxSx } from "../../Styles/SXstyles";
import { FabricOverlay } from "./Overlays";
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function RulesBox({ screen, children }) {
  const padding = screen.lg
    ? "1rem"
    : screen.md
    ? { xs: ".5rem 0", sm: ".5rem 2rem", lg: ".5rem 5rem", xl: "1rem" }
    : ".25rem";
  return (
    <Grid
      xs={1}
      sx={{
        // height: "100%",
        width: "100%",
        padding: padding,
        lineHeight: screen.lg || screen.md ? 1.5 : screen.xs ? 1.1 : 1.2,
      }}
    >
      <Paper
        elevation={screen.lg || screen.md ? 3 : 1}
        style={{
          ...flexBoxSx,
          backgroundColor: Sx.color.secondary,
          padding: ".25rem .75rem",
          borderRadius: "5px",
          color: "#fff",
          textAlign: "left",
        }}
      >
        {children}
      </Paper>
    </Grid>
    // <Textfit
    //   style={{
    //     ...flexBoxSx,
    //     position: "relative",
    //     backgroundColor: Sx.color.secondary,
    //     color: "#fff",
    //     padding: ".5rem",
    //     borderRadius: "5px",
    //     fontWeight: "100",
    //     // fontFamily: Sx.font.secondary,
    //   }}
    // >
    //   <FabricOverlay />
    //   {children}
    // </Textfit>
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
