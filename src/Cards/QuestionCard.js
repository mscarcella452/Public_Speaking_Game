import React, { useEffect } from "react";

import {
  Paper,
  Box,
  Slide,
  Switch,
  FormControlLabel,
  IconButton,
  Typography,
  Card,
} from "@mui/material";
import { flexBoxSx, cardFrontSx, cardBackSx } from "../SXstyles";
import styled from "styled-components";
import FlipCard from "./FlipCard";
import FrontImageCard from "./FrontCards/FrontImageCard";
import PublicSpeakingCropped from ".././Images/PublicSpeakingCropped.png";

function QuestionCard({ currentQuestion, flip, gameActive, seconds }) {
  return (
    <FlipCard
      height={questionHeight}
      width={questionWidth}
      flip={flip}
      active={gameActive}
      slideDirection={gameActive ? "down" : "left"}
    >
      <FrontImageCard image={PublicSpeakingCropped} />

      <Box sx={questionCardBackSx}>
        <Box sx={breadSx}>{`:${seconds}`}</Box>
        <Box sx={{ ...flexBoxSx, background: "green" }}>{currentQuestion}</Box>
        {/* <Box sx={breadSx} /> */}
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
  background: "Red",
  textAlign: "center",
  cursor: "auto",
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem" },
  padding: { xs: ".75rem", sm: ".75rem", md: "1", lg: "1rem" },
};

const questionHeight = {
  xs: "150px",
  sm: "175px",
  md: "225px",
  lg: "275px",
  xl: "325px",
};
const questionWidth = {
  xs: "300px",
  sm: "350px",
  md: "450px",
  lg: "550px",
  xl: "650px",
};

const breadSx = {
  ...flexBoxSx,
  justifyContent: "flex-end",
  height: {
    xs: "20px",
    sm: "30px",
    md: "50px",
    lg: "60px",
  },
  fontWeight: "bold",
  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
};
