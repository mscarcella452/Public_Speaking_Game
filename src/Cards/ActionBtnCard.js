import React, { useState, useEffect } from "react";
import { useToggle } from "../CustomHooks";
import FlipCard from "./FlipCard";
import FrontImageCard from "./FrontCards/FrontImageCard";
import PublicSpeakingCropped from ".././Images/PublicSpeakingCropped.png";
import { Box } from "@mui/material";
import { flexBoxSx, cardFrontSx, cardBackSx } from "../SXstyles";

const text = ["Start Speech", "View Topic", "Fail Speech"];
const frontText = ["Start Speech", "View Topic", "Fail Speech"];
const backText = ["Fail Speech", "Start Speech", "View Topic"];
// const text = [
//   ["Start Speech", "Fail Speech"],
//   ["View Topic", "Start Speech"],
//   ["Fail Speech", "View Topic"],
// ];

function ActionBtnCard({ active, handleClick, btnFlip, children }) {
  return (
    <FlipCard
      extraSx={extraSx}
      flip={btnFlip}
      active={active}
      slideDirection={active ? "up" : "left"}
    >
      {/* <Box sx={{ ...cardFrontSx, backgroundColor: "black" }}></Box> */}
      <FrontImageCard image={PublicSpeakingCropped} />
      <Box sx={cardBackSx} onClick={e => handleClick(e)}>
        {children}
      </Box>
    </FlipCard>
  );
}

const extraSx = {
  height: "100%",
  width: "180px",
  borderRadius: "2.5px",
};
export default ActionBtnCard;
