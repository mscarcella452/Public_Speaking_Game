import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { flexBoxSx, marginSx, smallFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";

export default function Header({ toggleFlip }) {
  return (
    <Box sx={marginSx}>
      <FlipContainer flip={false} containerSx={smallFlipContainerSx}>
        <Button onClick={toggleFlip} sx={flexBoxSx}>
          Flip
        </Button>
      </FlipContainer>
      <FlipContainer flip={false} containerSx={smallFlipContainerSx}>
        <Button onClick={toggleFlip} sx={flexBoxSx}>
          Flip
        </Button>
      </FlipContainer>
    </Box>
  );
}

const HeaderSx = {
  ...marginSx,
  height: {
    xs: "50px",
    sm: "50px",
    md: "50px",
    lg: "50px",
    xl: "50px",
  },
};

const smallBtnWidthSx = {
  xs: "55px",
  sm: "55px",
  md: "55px",
  lg: "55px",
  xl: "55px",
};
