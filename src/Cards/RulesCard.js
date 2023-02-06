import React, { useEffect } from "react";
import { delay } from "../Helpers/FunctionHelpers";
import { useToggle, useDidMountEffect } from "../Helpers/CustomHooks";
import { Box } from "@mui/material";
import { flexBoxSx, frontFlipSx, backFlipSx, breadSx } from "../SXstyles";
import styled from "styled-components";
import FlipCard from "./FlipCard";

function RulesCard({ showCard }) {
  const [flip, toggleFlip] = useToggle(false);

  useDidMountEffect(() => {
    delay(toggleFlip, 1500);
  }, [showCard]);

  return (
    <FlipCard
      // extraSx={questionCardBoxSx}
      flip={flip}
      timeout={1500}
      active={showCard}
      slideDirection={showCard ? "down" : "left"}
    >
      <Box sx={frontFlipSx}>Rules</Box>

      <Box sx={rulesCardBackSx}>
        {/* <Box sx={breadSx}>{`:${seconds}`}</Box> */}
        <Box
          sx={{
            ...flexBoxSx,
            lineHeight: "1.5",
            textAlign: "left",
          }}
        >
          These are the rules
        </Box>
        {/* <Box sx={breadSx} /> */}
      </Box>
    </FlipCard>
  );
}

export default RulesCard;

const rulesCardBackSx = {
  ...backFlipSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: ".5rem",
  cursor: "auto",
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2.5rem" },
  padding: { xs: ".75rem", sm: ".75rem", md: "1.5rem", lg: "1rem 2rem" },
};
