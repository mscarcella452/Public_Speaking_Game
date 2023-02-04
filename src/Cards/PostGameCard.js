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
import {
  flexBoxSx,
  cardFrontSx,
  cardBackSx,
  cardOverlay,
  questionCardBoxSx,
  breadSx,
} from "../SXstyles";
import styled from "styled-components";
import FlipCard from "./FlipCard";
import FrontImageCard from "./FrontCards/FrontImageCard";
import PublicSpeakingCropped from ".././Images/PublicSpeakingCropped.png";

function PostGameCard({ currentQuestion, flip, active, seconds }) {
  return (
    <FlipCard
      extraSx={questionCardBoxSx}
      flip={flip}
      active={active}
      slideDirection={active ? "down" : "left"}
    >
      <FrontImageCard image={PublicSpeakingCropped} />

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
          post game
        </Box>
        <Box sx={breadSx} />
      </Paper>
    </FlipCard>
  );
}

export default PostGameCard;

const questionCardBackSx = {
  ...cardBackSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: ".5rem",
  cursor: "auto",
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2.5rem" },
  padding: { xs: ".75rem", sm: ".75rem", md: "1.5rem", lg: "1rem 2rem" },
};
