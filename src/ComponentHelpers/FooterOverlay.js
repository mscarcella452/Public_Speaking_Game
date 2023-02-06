import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { marginSx, flexBoxSx, smallFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import FlipContainerOverlay from "./FlipContainerOverlay";

export default function FooterOverlay({
  gameActive,
  mainCard,
  timerActive,
  togglePowerButton,
  toggleFlip,
  flip,
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
        flip={false}
        containerSx={smallFlipContainerSx}
        position={"left bottom"}
      >
        <Button
          onClick={toggleFlip}
          sx={{
            ...flexBoxSx,

            zIndex: 7,
          }}
        >
          Flip
        </Button>
      </FlipContainerOverlay>
      <FlipContainerOverlay
        flip={true}
        containerSx={smallFlipContainerSx}
        position={"center bottom"}
      >
        <Button onClick={toggleFlip} sx={{ ...flexBoxSx, zIndex: 20 }}>
          Flip
        </Button>
      </FlipContainerOverlay>
      <FlipContainerOverlay
        flip={flip}
        containerSx={smallFlipContainerSx}
        position={"right bottom"}
      >
        <Button onClick={toggleFlip} sx={flexBoxSx}>
          Flip
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
