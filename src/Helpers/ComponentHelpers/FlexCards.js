import React, { useState } from "react";
import { useToggle } from "../CustomHooks";
import { flexBoxSx } from "../SXstyles";
import { Paper, Box } from "@mui/material";

function FlexCards({ gameActive, toggleGame }) {
  return (
    <Box sx={{ ...flexBoxSx, gap: "1rem" }}>
      <Paper
        sx={{
          ...flexBoxSx,
          height: "100%",
          width: gameActive ? "500px" : "60px",
          transition: "width ease-in .5s",
          borderRadius: "20px",
        }}
        onClick={toggleGame}
      >
        left
      </Paper>
      <Paper
        sx={{
          ...flexBoxSx,
          height: "100%",
          width: gameActive ? "60px" : "500px",
          transition: "width ease-in .5s",
          borderRadius: "20px",
        }}
        onClick={toggleGame}
      >
        right
      </Paper>
    </Box>
  );
}

export default FlexCards;
