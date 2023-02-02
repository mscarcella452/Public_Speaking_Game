import React, { useEffect } from "react";
import { Paper, Box, Slide } from "@mui/material";
import { flexBoxSx } from "../SXstyles";
import styled from "styled-components";
// import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";
function FlipCard({ flip, active, slideDirection, extraSx, children }) {
  return (
    <Slide direction={slideDirection} in={active} mountOnEnter unmountOnExit>
      <Paper
        elevation={!flip && 5}
        sx={{
          ...flexBoxSx,
          position: "relative",
          transition: "width ease-in .5s",
          borderRadius: "5px",
          fontSize: "2rem",
          overflow: "hidden",
          ...extraSx,
          background: "transparent",
        }}
      >
        <FlipBoxInner
          elevation={5}
          sx={{
            width: "100%",
            height: "100%",
            transition: "transform 1.5s",
            transformStyle: "preserve-3d",
            cursor: "pointer",
            position: "relative",
            transform: flip && "rotateX(180deg)",
            borderRadius: "5px",
          }}
        >
          {children}
        </FlipBoxInner>
      </Paper>
    </Slide>
  );
}

export default FlipCard;

// styled Components--------------------------------------------
const FlipBoxInner = styled(Paper)``;
