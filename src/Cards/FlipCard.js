import React, { useEffect } from "react";
import { Paper, Box, Slide } from "@mui/material";
import { flexBoxSx } from "../SXstyles";
import styled from "styled-components";
// import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";
function FlipCard({ flip, active, slideDirection, height, width, children }) {
  return (
    <Slide direction={slideDirection} in={active} mountOnEnter unmountOnExit>
      <Box
        sx={{
          ...flexBoxSx,
          position: "relative",
          height: height,
          width: width,
          transition: "width ease-in .5s",
          borderRadius: "5px",
          fontSize: "2rem",
          overflow: "hidden",
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
      </Box>
    </Slide>
  );
}

export default FlipCard;

// styled Components--------------------------------------------
const FlipBoxInner = styled(Paper)``;
