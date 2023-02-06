import React, { useState, useEffect } from "react";
import { delay } from "../Helpers/FunctionHelpers";
import { useToggle, useDidMountEffect } from "../Helpers/CustomHooks";
import { Box, Button } from "@mui/material";
import { flexBoxSx, frontFlipSx, backFlipSx, breadSx } from "../SXstyles";
import styled from "styled-components";
import FlipCard from "./FlipCard";
import FrontImageCard from "./FrontCards/FrontImageCard";
import PublicSpeakingCropped from ".././Images/PublicSpeakingCropped.png";

function ActionBtnCard({ handleClick, showCard, children }) {
  // const [active, toggleActive] = useToggle(false);
  const [flip, toggleFlip] = useToggle(false);

  useEffect(() => {
    delay(toggleFlip, 1500);
  }, [showCard]);
  // useDidMountEffect(() => {
  //   delay(toggleFlip, 1500);
  // }, [showCard]);
  // useEffect(() => {
  //   !showCard && flip && delay(toggleFlip, 1500);
  //   showCard && delay(toggleFlip, 1500);
  // }, [showCard]);

  return (
    <FlipCard
      // extraSx={questionCardBoxSx}
      flip={flip}
      timeout={500}
      active={showCard}
      slideDirection={showCard ? "up" : "left"}
    >
      <Box sx={{ ...frontFlipSx, background: "#333" }} />

      <Button sx={questionCardBackSx} onClick={handleClick}>
        {children}
      </Button>
    </FlipCard>
  );
}

export default ActionBtnCard;

const questionCardBackSx = {
  ...backFlipSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: ".5rem",
  cursor: "auto",
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2.5rem" },
  padding: { xs: ".75rem", sm: ".75rem", md: "1.5rem", lg: "1rem 2rem" },
};
