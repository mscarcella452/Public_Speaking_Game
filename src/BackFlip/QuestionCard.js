import React, { useState } from "react";
import { Box } from "@mui/material";
import { flexBoxSx, breadSx } from "../SXstyles";
import styled from "styled-components";

function QuestionCard({ currentQuestion, seconds }) {
  return (
    <Box sx={questionCardBackSx}>
      <Box sx={breadSx}>{`:${seconds}`}</Box>
      <Box
        sx={{
          ...flexBoxSx,
          lineHeight: "1.5",
          textAlign: "left",
        }}
      >
        {/* {currentQuestion} */} question
      </Box>
      <Box sx={breadSx} />
    </Box>
  );
}

export default QuestionCard;

const questionCardBackSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: ".5rem",
  cursor: "auto",
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2.5rem" },
  padding: { xs: ".75rem", sm: ".75rem", md: "1.5rem", lg: "1rem 2rem" },
  zIndex: 10,
};
