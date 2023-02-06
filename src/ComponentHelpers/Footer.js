import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { marginSx, flexBoxSx, smallFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";

export default function Footer({
  gameActive,
  mainCard,
  timerActive,
  togglePowerButton,
  toggleFlip,
  flip,
}) {
  return (
    <Box sx={marginSx}>
      <FlipContainer
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
      </FlipContainer>
      <FlipContainer
        flip={true}
        containerSx={smallFlipContainerSx}
        position={"center bottom"}
      >
        <Button onClick={toggleFlip} sx={flexBoxSx}>
          Flip
        </Button>
      </FlipContainer>
      <FlipContainer
        flip={flip}
        containerSx={smallFlipContainerSx}
        position={"right bottom"}
      >
        <Button onClick={toggleFlip} sx={flexBoxSx}>
          Flip
        </Button>
      </FlipContainer>
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
