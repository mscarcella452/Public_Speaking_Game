import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { marginSx, flexBoxSx, smallFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";

export default function Footer({
  gameActive,
  gameStatus,
  mainCard,
  timerActive,
  togglePowerButton,
  toggleFlip,
  flip,
}) {
  return (
    <Box sx={marginSx}>
      <FlipContainer
        active={gameActive && gameStatus === "topic"}
        containerSx={smallFlipContainerSx}
      />
      <FlipContainer
        active={gameActive && gameStatus === "speech"}
        containerSx={smallFlipContainerSx}
      />
      <FlipContainer
        active={!gameActive || gameStatus === "result"}
        containerSx={smallFlipContainerSx}
      />
    </Box>
  );
}

const btnWidthSx = {
  xs: "160px",
  sm: "160px",
  md: "160px",
  lg: "160px",
  xl: "160px",
};
