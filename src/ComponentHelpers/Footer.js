import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { marginSx } from "../../SXstyles";
import BtnCardContainer from "./BtnCardContainer";
import ActionBtnCard from "../../Cards/ActionBtnCard";

export default function Footer({
  gameActive,
  mainCard,
  timerActive,
  togglePowerButton,
}) {
  return (
    <Box sx={marginSx}>
      <BtnCardContainer width={btnWidthSx}></BtnCardContainer>
      <BtnCardContainer width={btnWidthSx}>
        <ActionBtnCard showCard={mainCard} handleClick={togglePowerButton}>
          Start Timer
        </ActionBtnCard>
      </BtnCardContainer>
      <BtnCardContainer width={btnWidthSx}>
        <ActionBtnCard showCard={!gameActive} handleClick={togglePowerButton}>
          Play
        </ActionBtnCard>
      </BtnCardContainer>
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
