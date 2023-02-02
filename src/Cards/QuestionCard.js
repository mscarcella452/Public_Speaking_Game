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
import { flexBoxSx, cardFrontSx, cardBackSx, cardOverlay } from "../SXstyles";
import styled from "styled-components";
import FlipCard from "./FlipCard";
import FrontImageCard from "./FrontCards/FrontImageCard";
import PublicSpeakingCropped from ".././Images/PublicSpeakingCropped.png";

function QuestionCard({ currentQuestion, flip, active, seconds }) {
  return (
    <FlipCard
      extraSx={extraSx}
      flip={flip}
      active={active}
      slideDirection={active ? "down" : "left"}
    >
      <FrontImageCard image={PublicSpeakingCropped}>
        <Paper elevation={5} sx={cardOverlay} />
      </FrontImageCard>

      <Paper elevation={5} sx={questionCardBackSx}>
        <Box sx={breadSx}>{`:${seconds}`}</Box>
        <Box
          sx={{
            ...flexBoxSx,
            // background: "teal",
            lineHeight: "1.5",
            // padding: "0 2rem",
            textAlign: "left",
          }}
        >
          {currentQuestion}
        </Box>
        <Box sx={breadSx} />
        <Paper elevation={5} sx={cardOverlay} />
      </Paper>
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

const extraSx = {
  height: {
    xs: "150px",
    sm: "175px",
    md: "225px",
    lg: "275px",
    xl: "400px",
  },
  width: {
    xs: "300px",
    sm: "350px",
    md: "450px",
    lg: "550px",
    xl: "800px",
  },
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
  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem", lg: "3rem" },
};
