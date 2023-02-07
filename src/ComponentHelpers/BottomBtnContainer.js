import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { marginSx, flexBoxSx, smallFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import FlipContainerOverlay from "./FlipContainerOverlay";

export default function BottomBtnContainer({
  gameActive,
  gameStatus,
  startTimer,
  endRound,
  nextRound,
  togglePowerButton,
}) {
  return (
    <Box
      sx={{
        ...marginSx,
        // background: "teal",
        // opacity: 0.2,
      }}
    >
      <FlipContainerOverlay
        active={gameActive && gameStatus === "topic"}
        containerSx={smallFlipContainerSx}
      >
        <Button onClick={startTimer} sx={btnSx}>
          Start Timer
        </Button>
      </FlipContainerOverlay>
      <FlipContainerOverlay
        active={gameActive && gameStatus === "speech"}
        containerSx={smallFlipContainerSx}
      >
        <Button onClick={endRound} sx={btnSx}>
          Fail Speech
        </Button>
      </FlipContainerOverlay>
      <FlipContainerOverlay
        active={!gameActive || gameStatus === "result"}
        containerSx={smallFlipContainerSx}
      >
        <Button onClick={gameActive ? nextRound : togglePowerButton} sx={btnSx}>
          {gameActive ? "Next Round" : "Play"}
        </Button>
      </FlipContainerOverlay>
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

const btnSx = {
  ...flexBoxSx,
  zIndex: 20,
};
