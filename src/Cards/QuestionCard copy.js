import React, { useState, useEffect } from "react";
import { delay } from "../Helpers/FunctionHelpers";
import { useToggle } from "../CustomHooks";
import { Box } from "@mui/material";
import { flexBoxSx, cardFrontSx, cardBackSx, breadSx } from "../SXstyles";
import styled from "styled-components";
import FlipCard from "./FlipCard";
import FrontImageCard from "./FrontCards/FrontImageCard";
import PublicSpeakingCropped from ".././Images/PublicSpeakingCropped.png";

function QuestionCard({
  currentQuestion,
  showCard,
  seconds,
  questionCard,
  finishSpeech,
}) {
  // const [active, toggleActive] = useToggle(false);
  const [flip, toggleFlip] = useToggle(false);

  // useEffect(() => {
  //   delay(toggleFlip, 1500);
  // }, [showCard]);
  useEffect(() => {
    !showCard && flip && delay(toggleFlip, 1500);
    showCard && delay(toggleFlip, 1500);
  }, [showCard]);
  console.log(currentQuestion);
  return (
    <FlipCard
      // extraSx={questionCardBoxSx}
      flip={flip}
      timeout={1500}
      active={showCard}
      slideDirection={showCard ? "down" : "left"}
    >
      {questionCard ? (
        <FrontImageCard image={PublicSpeakingCropped} />
      ) : (
        <Box sx={cardFrontSx}>{finishSpeech ? "Congrats" : "Failure"}</Box>
      )}
      <FrontImageCard image={PublicSpeakingCropped} />

      <Box sx={questionCardBackSx}>
        <Box sx={breadSx}>{`:${seconds}`}</Box>
        <Box
          sx={{
            ...flexBoxSx,
            lineHeight: "1.5",
            textAlign: "left",
          }}
        >
          {currentQuestion}
        </Box>
        <Box sx={breadSx} />
      </Box>
    </FlipCard>
  );
}

export default QuestionCard;

const questionCardBackSx = {
  ...cardBackSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: ".5rem",
  cursor: "auto",
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2.5rem" },
  padding: { xs: ".75rem", sm: ".75rem", md: "1.5rem", lg: "1rem 2rem" },
};
